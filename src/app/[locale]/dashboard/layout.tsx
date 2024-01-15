import { getCategory } from "@/actions/actions";
import CategoriesForDashboard from "@/components/Dashboard/CategoriesForDashboard";




const ServisLayout = async ({ children }: { children: React.ReactNode }) => {

  let repos = await getCategory(); //  шу ердан дата тортяпмиз

  return (
    <div className="grid grid-cols-12 h-full">
      <div className="col-start-1 col-span-3 ml-25 bg-slate-100 rounded-lg">
        <CategoriesForDashboard category={repos?.result} />
      </div>
      <div className="col-start-4 col-span-12 mr-25 ml-10 bg-slate-300 rounded-lg py-25 px-20">
        {children}
      </div>
    </div>
  );
};

export default ServisLayout;
