import ModalFormForUpdate from "../../Modal/ModalUpdateForm";

const DataList = (props: any) => {
  return (
    <div>
      <div className="">
        {props.data?.map((item: any) => {
          return (
            <div className="my-3 grid grid-cols-10" key={item._id}>
              <div className="bg-slate-100 mr-7 rounded py-2 px-2 col-span-8">
                {item.title}
              </div>

              <div className="col-span-2">
                <div className="inline-block">
                  {/*    ============    Модальный окно оркали датани update килиш учун урадик   ============      */}
                  <ModalFormForUpdate item={item} update={props.update}>
                    <button
                      className="mr-10 px-3 -py-2 rounded bg-green-500 text-white border-none outline-none"
                      disabled={props.disable}
                    ></button>
                  </ModalFormForUpdate>
                </div>

                <button
                  className="px-3 py-2 inline-block rounded bg-red-600 text-white border-none outline-none"
                  onClick={(event: React.MouseEvent<HTMLElement>) =>
                    props.delete(item._id)
                  }
                  disabled={props.disable}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DataList;
