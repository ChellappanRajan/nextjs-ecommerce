import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
export async function GET(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const {searchParams} = new URL(req.url);
    const colorId = searchParams.get('colorId') ?? undefined;
    const categoryId = searchParams.get('categoryId') ?? undefined;
    const sizeId = searchParams.get('sizeId') ?? undefined;
    const isFeatured = searchParams.get('isFeatured') ?? undefined;

    if (!params.storeId) {
      return new NextResponse("StoreId is required", { status: 401 });
    }

    const products = await prismadb.product.findMany({
      where: {
        storeId: params.storeId,
        categoryId,
        sizeId,
        colorId,
        isFeatured: isFeatured ? true : undefined
      },
      include:{
        images:true,
        color:true,
        size:true,
        category:true
      },
      orderBy:{
        createdAt:'desc'
      }
    });

    return NextResponse.json(products);
  } catch (error) {
    console.log(`[PRODUCTS_GET]`, JSON.stringify(error));
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const {name,price,categoryId,colorId,sizeId,images,isFeatured,isArchived} = body;
    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }
    if(!name){
      return new NextResponse("name is required", { status: 401 });
    }
    if (!price) {
      return new NextResponse("Price is required", { status: 401 });
    }
    if (!categoryId) {
      return new NextResponse("categoryId is required", { status: 401 });
    }
    if (!params.storeId) {
      return new NextResponse("StoreId is required", { status: 401 });
    }
    if(images?.length < 0 || !images){
      return new NextResponse("images is required", { status: 401 });
    }
    if(!colorId){
      return new NextResponse("colorId is required", { status: 401 });
    }
    if(!sizeId){
      return new NextResponse("colorId is required", { status: 401 });
    }
  

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const product = await prismadb.product.create({
      data: {
        name,price,categoryId,colorId,sizeId,isFeatured,isArchived,
        storeId: params.storeId,
        images:{
          createMany:{
            data:[
              ...images.map((image:{url:string})=>image)
            ]
          }
        }
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    console.log(`[PRODUCTS_POST]`, JSON.stringify(error));
    return new NextResponse("Internal error", { status: 500 });
  }
}

