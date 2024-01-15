"use client";
import {
  DeleteCategory,
  UpdateCategory,
  createCategory,
  getCategory,
} from "@/actions/actions";
import CategoryForm from "@/components/Category/CategoryForm";
import DataList from "@/components/Category/DataList/DataList";
import React, { useEffect, useState } from "react";

const CategoryPage = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(true);
  const [disable, setDisable] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function getData() {
    //  localStorage  да маълумот болмаса сервердан тортади ,  агар localStorage дата булса сервердан тортмайди
    if (typeof window !== "undefined") {
      if (!localStorage.getItem("category")) {
        let { result } = await getCategory();
        setData(result);
        setLoading(false);
        let dataArray = JSON.stringify(result);
        localStorage.setItem("category", dataArray);
      } else {
        let result = window.localStorage.getItem("category") || "";
        setData(JSON.parse(result));
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    getData();
  }, []);

  async function Delete(id: any) {
    setDisable(true);
    await DeleteCategory(id);
    let result = data.filter((item: any) => item._id !== id);
    setData(result);
    let dataArray = JSON.stringify(result);
    localStorage.setItem("category", dataArray);
    setDisable(false);
  }

  async function createData(title: any) {
    if (typeof title !== "string" || title.length === 0) {
      setErr(" Maydonlar bo'sh bo'lmasligi kerak !");
      setTimeout(() => {
        setErr(null);
      }, 2000);
    } else {
      (await createCategory(title)) as any;

      if (typeof window !== "undefined") {
        let { result } = await getCategory();
        setData(result);
        setLoading(false);
        let dataArray = JSON.stringify(result);
        localStorage.setItem("category", dataArray);
      }
    }
  }

  async function updateData({ id, body }: { id: number; body: any }) {
    
    if (typeof body !== "string" || body.length === 0) {
      setErr(" Maydonlar bo'sh bo'lmasligi kerak !");
      setTimeout(() => {
        setErr(null);
      }, 2000);
    } else {
      await UpdateCategory(id, body);

      let result = data.find((item: any) => item._id === id);
      result.title = body;

      let dataArray = JSON.stringify(result);
      localStorage.setItem("category", dataArray);
      setDisable(false);
    }
  }

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  if (err) {
    return (
      <div className="mt-30 text-center">
        <div className="">
          <div className="font-bold text-red-500 text-3xl">{err}</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mt-30">
        <div className="">
          <div className=""></div>
          <div className="">
            {/*   ============    Data Create килиш имконини беради   ============        */}
            <CategoryForm functionForData={createData} />
          </div>
          <div className=" mt-70">
            <div className="">
              <div className="">
                {/* Маълумотларни списка холида курсатади ва кайси бирини  update еки delete  килиш имконини беради */}
                <DataList
                  data={data}
                  delete={Delete}
                  disable={disable}
                  update={updateData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
