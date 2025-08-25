//Mock from DB

const products = [
    {id:1, category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {id:2,category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {id:3,category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {id:4, category: "Vegetables", price: "$1", stocked: true, name: "Peas"},
    {id:5, category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    {id:6, category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    {id:7, category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    {id:8, category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    {id:9, category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    {id:10, category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];


export default function Products() {

    return (
        <div className="flex flex-col justify-start items-center ma-3 pa-3 w-full">
            <h1 className="text-3xl font-bold text-slate-100 ">Mes produits frais</h1>
            <div id="container" className={"flex gap-2 flex-wrap w-1/2"}>
                {
                    products.map(p => {
                        return ( <Product key={p.id} product={p} />)
                    })
                }


            </div>
        </div>
    )
}

function Product({product}) {
    // const product = props.product;
    return (
        <div id={"product"} className={"ring-1 p-3 w-[12rem] bg-slate-400"}>
            <h3 className="ma-1 text-xl font-bold mb-2">{product.name}</h3>
            <p className={product.stocked ? "text-slate-100" : "text-red-500"}>Prix {product.price}</p>
        </div>
    )
}