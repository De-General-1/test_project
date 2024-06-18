import mongoose from 'mongoose';
import Category from './Models/category.js';
import Product from './Models/product.js';
import Cart from './Models/cart.js';
import Region from './Models/region.js';
import { connect } from './index.js';

const seedDatabase = async () => {
    await connect(); // Ensure connect is awaited

    // Clear existing data
    await Category.deleteMany({});
    await Product.deleteMany({});
    await Cart.deleteMany({});
    await Region.deleteMany({});

    // Insert categories
    const categories = await Category.insertMany([
        { name: 'Electronics' },
        { name: 'Books' },
        { name: 'Clothing' },
        { name: 'Stationary' }
    ]);

    // Insert regions with required fields (product_id and quantity)
    const regions = await Region.insertMany(
       [
            { name: 'Ashanti' },
            { name: 'Accra' },
            { name: 'Central' },
            { name: 'Volta' },
            { name: 'Eastern' },
            { name: 'Bono' }
        ]
);

    // Insert products
    const products = await Product.insertMany([
        {
            name: 'Smartphone',
            description: 'Latest model smartphone with high-end features.',
            price: 699.99,
            category_id: categories[0]._id,
            stock: 50,
            region: regions[0]._id ,// Reference to the region document
            image: "https://images-cdn.ubuy.co.in/633ac057a9a3195e41204746-5-45-inch-smartphone-hd-full-screen.jpg"
        },
        {
            name: 'Laptop',
            description: 'Powerful laptop for work and gaming.',
            price: 999.99,
            category_id: categories[0]._id,
            stock: 30,
            region: regions[0]._id, // Reference to the region document
            image: "https://media.wired.com/photos/64daad6b4a854832b16fd3bc/master/w_1600,c_limit/How-to-Choose-a-Laptop-August-2023-Gear.jpg"
        },
        {
            name: 'Novel',
            description: 'Bestselling fiction novel.',
            price: 19.99,
            category_id: categories[1]._id,
            stock: 100,
            region: regions[1]._id,
            image: "https://assets.ltkcontent.com/images/98857/cs-lewis-novels-on-shelf_27c5571306.webp"

        },
        {
            name: 'T-shirt',
            description: 'Comfortable cotton t-shirt.',
            price: 9.99,
            category_id: categories[2]._id,
            stock: 200,
            region: regions[2]._id,
            image : "https://i5.walmartimages.com/seo/BILLIONHATS-12-Pack-Plus-Size-Men-Cotton-T-Shirt-Bulk-Big-Tall-Short-Sleeve-Lightweight-Tees-12-Pack-Assorted-A-Large_5900b0a1-bb30-4c2f-bb7a-fece23f82bac.409a28fd559e87560ebba6325263922d.jpeg"
        },
        { 
            name: 'Tablet',
            description: 'A lightweight and portable tablet', 
            price: 399,
            category_id: categories[1]._id, 
            region: regions[4].name, 
            stock: 80,
            image: "https://images-cdn.ubuy.co.in/633b51122af1ce605a57ae50-10-1.jpg"

         },
        { 
            name: 'Camera',
            description: 'A digital camera with high resolution', 
            price: 499, 
            category_id: categories[2]._id, 
            region: regions[5].name, 
            stock: 60,
            image: "https://i5.walmartimages.com/seo/Canon-EOS-Rebel-T7i-DSLR-Camera-with-18-55mm-Lens_a7321869-97ff-4a7f-aed0-8a939fafa692.9c0dabeb21ce0fb604e4b27da67eb8bc.jpeg"
        },
        { 
            name: 'Monitor', 
            description: 'A 4K ultra HD monitor', 
            price: 299, 
            category_id: categories[0]._id, 
            region: regions[0].name, 
            stock: 90,
            image: "https://lg.com/content/dam/channel/wcms/in/images/monitors/27mp400-b_atr_eail_in_c/27MP400-B-450.jpg"
        },
            { name: 'Keyboard', description: 'Mechanical keyboard with RGB lighting', price: 129, category_id: categories[1]._id, region: regions[1].name, stock: 150, image : "https://img.freepik.com/free-photo/keyboard-with-neon-lights-high-angle_23-2149680226.jpg?t=st=1718738411~exp=1718742011~hmac=272c13b9a17a8b95a9c0211ebdea83d2fd190db921ca43dc2761ee195ab88a57&w=740" },
            { name: 'Mouse', description: 'Ergonomic wireless mouse', price: 59, category_id: categories[2]._id, region: regions[2].name, stock: 110, image: "https://img.freepik.com/free-photo/modern-computer-equipment-working-dark-office-generated-by-ai_188544-22081.jpg?t=st=1718738869~exp=1718742469~hmac=5ce4a3152dc78ab08a41f66320eecc852f55dcf9d9db0461c609ca360f1292e9&w=826" },
            { name: 'Printer', description: 'Wireless multifunction printer', price: 199, category_id: categories[0]._id, region: regions[3].name, stock: 40, image: "https://img.freepik.com/free-photo/home-printer-based-toner_23-2149287466.jpg?t=st=1718738936~exp=1718742536~hmac=726dfd93a4bdb7b0dce45cbcb57bbbf918887990a7eed61a99e6b1455006ab62&w=740" },
            { name: 'Printer', description: 'Wireless multifunction printer', price: 199, category_id: categories[0]._id, region: regions[3].name, stock: 40, image: "https://img.freepik.com/free-photo/home-printer-based-toner_23-2149287466.jpg?t=st=1718738936~exp=1718742536~hmac=726dfd93a4bdb7b0dce45cbcb57bbbf918887990a7eed61a99e6b1455006ab62&w=740" },
            { name: 'Speakers', description: 'High-quality Bluetooth speakers', price: 149, category_id: categories[2]._id, region: regions[4].name, stock: 130, image: "https://img.freepik.com/free-vector/large-speakers-isolated-icon_24877-58775.jpg?t=st=1718739070~exp=1718742670~hmac=7981be9982f5408d01b86010b60c3107d5a2fd064275026c81a6735257b2c2ef&w=740" },
            { name: 'Gaming Console', description: 'Next-gen gaming console', price: 499, category_id: categories[1]._id, region: regions[5].name, stock: 70, image: "https://img.freepik.com/free-photo/laptop-with-joystick_144627-12150.jpg?t=st=1718739125~exp=1718742725~hmac=37c79de8f83f489d61f8f290d11322b3e031b5ce0b290526d5595af596fd2bd5&w=740" },
            { name: 'Router', description: 'High-speed internet router', price: 89, category_id: categories[0]._id, region: regions[0].name, stock: 140, image: "https://img.freepik.com/free-psd/router-isolated-transparent-background_191095-24268.jpg?t=st=1718739217~exp=1718742817~hmac=376f179d86edd795b9dfa24aadf35d62191027bbca3fb715f78720b6319256fe&w=740" },
            { name: 'External Hard Drive', description: '1TB external hard drive', price: 79, category_id: categories[1]._id, region: regions[1].name, stock: 120, image: "https://img.freepik.com/free-vector/gradient-hard-drive-illustration_23-2149369153.jpg?t=st=1718739351~exp=1718742951~hmac=4add89cdd24423cbf02ee3896df0f28fe841bb8c134faa524ca2023d9f5e548f&w=740" },
            { name: 'Fitness Tracker', description: 'Track your fitness goals', price: 99, category_id: categories[2]._id, region: regions[2].name, stock: 200, image: "https://img.freepik.com/free-vector/flat-design-fitness-trackers_23-2148533619.jpg?t=st=1718739438~exp=1718743038~hmac=62978726b5c11bbc9a76cb39ba79b41e6f176686dc6f8ee598df629099fd6f2a&w=740" },
            { name: 'Drone', description: '4K camera drone', price: 599, category_id: categories[0]._id, region: regions[3].name, stock: 50, image: "https://img.freepik.com/free-photo/various-hi-tech-devices-table_140725-9010.jpg?t=st=1718739502~exp=1718743102~hmac=f6df9b37acc3e25555cc59b79573c0ff2973274a42e212c91d546c735adb26cd&w=740" },
            { name: 'Projector', description: 'HD home projector', price: 299, category_id: categories[1]._id, region: regions[4].name, stock: 60, image: "https://img.freepik.com/free-photo/wireless-home-security-surveillance-camera_53876-96819.jpg?t=st=1718739725~exp=1718743325~hmac=4cce2ca1bfedb2f8cd253d1f77df8a9a7a2d55f861265bd6f3d8719a747d3246&w=740" },
            { name: 'E-Reader', description: 'Portable e-reader with backlight', price: 129, category_id: categories[2]._id, region: regions[5].name, stock: 110, image: "https://media.wired.com/photos/5932ba92a30e27707249abd4/master/w_1600,c_limit/0816_sonyereader_1000.jpg" },
            { name: 'Bluetooth Earbuds', description: 'Wireless Bluetooth earbuds', price: 69, category_id: categories[0]._id, region: regions[0].name, stock: 180, image: "https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SL1500_.jpg" },
            { name: 'Smart Thermostat', description: 'Smart home thermostat', price: 199, category_id: categories[1]._id, region: regions[1].name, stock: 90, image: "https://m.media-amazon.com/images/I/51qozB9MtpL._AC_SL1500_.jpg" },
            { name: 'Electric Scooter', description: 'Foldable electric scooter', price: 399, category_id: categories[2]._id, region: regions[2].name, stock: 70, image: "https://i5.walmartimages.com/seo/EVERCROSS-Electric-Scooter-with-10-Solid-Tires-800W-Motor-up-to-28-MPH-and-25-Miles-Range-Folding-Electric-Scooter-for-Adults-Black_d4db235f-bd3f-4167-9ad9-371289ca589c.2ef0a1cc74b94bc3971accc78a9957e7.png" },
            { name: 'VR Headset', description: 'Virtual reality headset', price: 299, category_id: categories[0]._id, region: regions[3].name, stock: 60, image: "https://cdn.thewirecutter.com/wp-content/media/2024/02/vrheadsets-2048px-0624-2x1-1.jpg?width=1024&quality=75&crop=2:1&auto=webp" },
            { name: 'Smart Doorbell', description: 'Video doorbell with motion detection', price: 149, category_id: categories[1]._id, region: regions[4].name, stock: 100, image: "https://m.media-amazon.com/images/I/41MZ8uvD6AL._SX300_SY300_QL70_FMwebp_.jpg" },
            { name: 'Wireless Charger', description: 'Fast wireless charger', price: 49, category_id: categories[2]._id, region: regions[5].name, stock: 140, image: "https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/how-does-wireless-charging-work-hero1589981176990286.jpg" }
    ]);

    // Update regions with correct product_id
    await Region.updateOne({ _id: regions[0]._id }, { product_id: products[0]._id });
    await Region.updateOne({ _id: regions[1]._id }, { product_id: products[2]._id });
    await Region.updateOne({ _id: regions[2]._id }, { product_id: products[3]._id });

    // Insert cart items
    await Cart.insertMany([
        {
            product_id: products[0]._id,
            quantity: 1
        },
        {
            product_id: products[1]._id,
            quantity: 2
        },
        {
            product_id: products[2]._id,
            quantity: 3
        }
    ]);

    console.log('Database seeded!');
    mongoose.connection.close();
};

seedDatabase().catch(err => console.error(err));
