"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";
import * as z from 'zod';
import { useForm } from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import axios from 'axios';
import { toast } from "react-hot-toast";
const formSchema = z.object({
    name: z.string().min(1)
})

export const StoreModals =()=>{
    const storeModal = useStoreModal();
    const [loading,setLoading] = useState(false);
    
    const form = useForm<z.infer<typeof formSchema >>({
        resolver:zodResolver(formSchema),
        defaultValues:{
            name:''
        }
    });

    const onSubmit = async (values:z.infer<typeof formSchema>)=>{
       try {
        setLoading(true);
        const response = await axios.post('/api/stores',values);
        
        //complete refresh to sync with table data on server
        window.location.assign(`/${response.data.id}`);

       } catch (error) {
        // console.log(error);
        toast.error("Something went wrong");
       }
       finally{
        setLoading(false);
       }
    }

    return(
        <Modal
        title="Create Store"
        description="Add new store to manage products and categories"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}
        >
            <div>
            <div className="space-y-4 pb-4 py-2">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField control={form.control} 
                name="name"
                
                render={({field})=>(<FormItem>
                    <FormLabel>
                        Name
                    </FormLabel>
                    <FormControl>
                      <Input disabled={loading} placeholder="E-Commerce" {...field}></Input>
                    </FormControl>
                    <FormMessage>
                        
                    </FormMessage>
                </FormItem>)}
                />
                <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                    <Button disabled={loading}  variant="outline" onClick={storeModal.onClose}>Cancel</Button>
                    <Button disabled={loading}  type="submit">Continue</Button>
                </div>
            </form>
        </Form>
        </div>
            </div>
        </Modal>
    )
}