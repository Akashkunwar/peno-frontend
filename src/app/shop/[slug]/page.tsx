import { products } from "@/data"; import { notFound } from "next/navigation"; import type { Metadata } from "next";
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{ const{slug}=await params; const p=products.find(x=>x.slug===slug); if(!p) return{title:"Not Found"}; return{title:`${p.name} | PENO`,description:p.shortDescription}; }
export async function generateStaticParams(){ return products.map(p=>({slug:p.slug})); }
export default async function ProductPage({params}:{params:Promise<{slug:string}>}){ const{slug}=await params; const p=products.find(x=>x.slug===slug); if(!p) notFound(); return <ProductDetail product={p}/>; }
import { ProductDetail } from "./product-detail";
