
import CategoryForPrice from "@/components/Price/CategoryForPrice";



const PriceLayout = ({ children }: { children: React.ReactNode }) => {



  return (
    <div className={`grid grid-cols-12 h-full`}>
      <div className="col-start-1 col-span-3 ml-25 bg-slate-100 rounded-lg">
        <CategoryForPrice />
      </div>
      <div className="col-start-4 col-span-12 mr-25 ml-10 bg-slate-50 rounded-lg py-25 px-40">
        {children}
      </div>
    </div>
  );
};

export default PriceLayout;
