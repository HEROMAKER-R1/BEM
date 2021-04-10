const produk = [
    {
        id_produk: 1,
        nama_produk: 'Huawei P30 pro'
    },
    {
        id_produk: 2,
        nama_produk: 'Huawei Nova 5T'
    }
];

const stok_produk = [
    {
        id_produk: 1,
        qty: 15
    },
    {
        id_produk: 1,
        qty: 6
    },
    {
        id_produk: 2,
        qty: 4
    },
    {
        id_produk: 2,
        qty: 18
    }
];

const res = stok_produk.reduce((a,{id,val})=>{
    return a.set(id, (a.get(id)||0) + val);
  }, new Map())

console.log(res.get(1));