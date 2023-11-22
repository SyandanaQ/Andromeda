import React, { useState, useEffect } from 'react';
// import { ProductService } from './ProductService';
import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Dropdown } from 'primereact/dropdown';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';

export default function BasicDemo() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Nasi Goreng', price: 15000, category: 'Makanan', inventoryStatus: 'INSTOCK', rating: 4, image: 'https://i.pinimg.com/236x/b2/31/9b/b2319bd02a85d4bcb9f1b36c6759c862.jpg' },
        { id: 2, name: 'Mie Goreng', price: 12000, category: 'Makanan', inventoryStatus: 'LOWSTOCK', rating: 3, image: 'https://i.pinimg.com/236x/dc/64/31/dc6431ef3928bbf6fd221052198ca5fd.jpg' },
        { id: 3, name: 'Mie Kuah', price: 12500, category: 'Makanan', inventoryStatus: 'LOWSTOCK', rating: 3, image: 'https://i.pinimg.com/236x/63/24/a6/6324a6b8f7ff063e93f2992787153471.jpg' },
        { id: 4, name: 'Mie', price: 10000, category: 'Makanan', inventoryStatus: 'OUTOFSTOCK', rating: 5, image: 'https://i.pinimg.com/236x/63/24/a6/6324a6b8f7ff063e93f2992787153471.jpg' }
    ]);
    const [sortKey, setSortKey] = useState('');
    const [sortOrder, setSortOrder] = useState(0);
    const [sortField, setSortField] = useState('');
    const [layout, setLayout] = useState('grid');

    const sortOptions = [
        { label: 'Harga Tinggi ke Rendah', value: '!price' },
        { label: 'Harga Rendah ke Tinggi', value: 'price' }
    ];

    // useEffect(() => {
    //     ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 5)));
    // }, []);

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const onSortChange = (event) => {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            setSortOrder(-1);
            setSortField(value.substring(1, value.length));
            setSortKey(value);
        } else {
            setSortOrder(1);
            setSortField(value);
            setSortKey(value);
        }
    };

    const listItem = (product) => {
        return (
            <div className="col-12 ">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={product.image} />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{product.name}</div>
                            <Rating value={product.rating} readOnly cancel={false}></Rating>
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag"></i>
                                    <span className="font-semibold">{product.category}</span>
                                </span>
                                <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                            </div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <span className="text-2xl font-semibold">Rp{product.price}</span>
                            <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'} onClick={() => addToCart(product)}></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const gridItem = (product) => {
        return (
            <div className="col-12 sm:col-6 lg:col-12 xl:col-3 p-2">
                <div className="p-3 border-1 surface-border surface-card border-round" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="flex align-items-center gap-2 text-left">
                            <i className="pi pi-tag"></i>
                            <span className="font-semibold">{product.category}</span>
                        </div>
                        <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    </div>
                    <div className="flex flex-column align-items-center gap-3 py-5 mx-4">
                        <img className="w-5 shadow-2 border-round" src={product.image} />
                        <div className="text-xl font-bold">{product.name}</div>
                        <Rating value={product.rating} readOnly cancel={false}></Rating>
                    </div>
                    <div className="flex align-items-center justify-content-between">
                        <span className="text-xl font-semibold">Rp{product.price}</span>
                        <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'} onClick={() => addToCart(product)}></Button>
                    </div>
                </div>
            </div>
        );
    };

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);

        if (existingItem) {
            const updatedCart = cartItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1, price: item.price + product.price } : item));
            setCartItems(updatedCart);
        } else {
            setCartItems([...cartItems, { id: product.id, name: product.name, price: product.price * 1, quantity: 1 }]);
        }
    };

    const Keranjang = () => {
        return (
            <div className="max-w-3xl mx-auto p-2">
                <div className="bg-white p-6 border-2 border-gray-200 rounded-md">
                    <h2 className="text-xl font-semibold">Keranjang</h2>
                    {cartItems.length === 0 ? (
                        <p>Kosong</p>
                    ) : (
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index} className="mb-2">
                                    <span>
                                        {item.name} {item.quantity} - (Rp{item.price})
                                   </span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        );
    };

    const itemTemplate = (product) => {
        if (!product) {
            return;
        }

        if (layout === 'list') return listItem(product);
        else if (layout === 'grid') return gridItem(product);
    };

    const header = () => {
        return (
            <div className="flex justify-content-between">
                <div className="flex align-items-center">
                    <Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Urutkan Berdasarkan Harga" onChange={onSortChange} className="w-full sm:w-14rem" />
                </div>
                <div className="flex align-items-center">
                    <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
                </div>
            </div>
        );
    };

    return (
        <div className="flex gap-4">
            <div className="max-w-3xl  p-2 ml-0.5 ">
                <div className="bg-white p-4 border-2 border-gray-200 rounded-md">
                    <div className="flex justify-content-between mb-4">
                        <Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Urutkan Berdasarkan Harga" onChange={onSortChange} className="w-full sm:w-14rem" />
                        <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
                    </div>
                    <DataView value={products} itemTemplate={itemTemplate} layout={layout} sortField={sortField} sortOrder={sortOrder} />
                </div>
            </div>
            <Keranjang className="ml-1 mr-1" />
        </div>
    );
}
