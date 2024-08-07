"use client";
import { Button } from "@/components/ui/button";
import { Layout, LayoutGrid, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import GlobalApi from "../_utils/GlobalApi";
import Link from "next/link";

function Header() {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getCategoryList();
  }, []);

  /**
   * Get Category List
   */
  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      setCategoryList(resp.data.data);
    });
  };

  return (
    <div className="p-5 shadow-md flex justify-between">
      <div className="flex items-center gap-8">
        <Link href={"/"}>
          <Image src="/logo_final_1.png" alt="logo" width={90} height={90} />
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2
              className="hidden md:flex gap-2 items-center 
              border rounded-full p-2 px-10 bg-slate-200 cursor-pointer"
            >
              <LayoutGrid className="h-5 w-5" /> Category
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={5}>
            <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categoryList.map((category, index) => (
              <Link href={"/products-category/" + category.attributes.name}>
                <DropdownMenuItem
                  key={index}
                  className="flex gap-4 items-center cursor-pointer"
                >
                  <Image
                    src={`
                  ${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${category?.attributes?.icon?.data[0]?.attributes?.url}`}
                    unoptimized={true}
                    alt="icon"
                    width={27}
                    height={27}
                  />
                  <h2 className="text-lg">{category?.attributes?.name}</h2>
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="md:flex items-center gap-3 border rounded-full p-2 px-5 hidden">
          <Search />
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
      </div>
      <div className="flex gap-5 items-center ">
        <h2 className="flex gap-2 text-xl font-bold text-green-700">
          <Link href={"/cart-display"}>
            <ShoppingCart />
            <div className="rounded-full border-2 border-green-700 mx-auto pl-1">
              {" "}
              3
            </div>
          </Link>
        </h2>
        <Link href={"/sign-in"}>
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
