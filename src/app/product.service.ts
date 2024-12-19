import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProductById(id: string | null): any {
    if (!id) return null;
    const numericId = parseInt(id, 10);
    return this.products.find(product => product.id === numericId);
  }
  private products = [
    { id: 1, name: 'Urban Vibes Hoodie', imageUrl: '../assets/images/hoodies/testt.png', description: 'Stay cozy and stylish with this oversized hoodie, perfect for city life. Crafted from soft cotton and featuring bold graphic design, it is made to stand out.', price: 45.99, category: 'Hoodies' },
    { id: 2, name: 'City Streets Joggers',imageUrl: '../assets/images/pants/joggers.webp', description: 'Comfortable yet trendy joggers for everyday wear. Designed with a traped fit and a sleek look matches any urban outfit.', price: 39.99, category: 'Pants' },
    { id: 3, name: 'Anime Print T-shirt', imageUrl: '../assets/images/tshirts/grafittyp.jpg',description: 'Express yourself with this anime-inspired graphic tee. Made from breathable cotton and featuring street art elements, it’s an essential piece for your wardrobe.', price: 24.99, category: 'T-shirts' },
    { id: 4, name: 'Denim Jacket', imageUrl: '../assets/images/jackets/denim.jpg',description: 'A modern twist on a classic denim jacket, featuring distressed details. Perfect for layering over any outfit.', price: 89.99, category: 'Jackets' },
    { id: 5, name: 'Streetwear Sneakers', imageUrl: '../assets/images/footwear/streetw.jpg',description: ' Step up your game with these sleek, high-performance sneakers. Featuring a mix of premium materials, these kicks provide both comfort and style for all-day wear.', price: 59.99, category: 'Footwear' },
    { id: 6, name: 'Urban Explorer Backpack',imageUrl: '../assets/images/accesories/urbanb.jpg', description: 'Designed for both style and functionality, this durable backpack has multiple compartments for all your essentials, whether you’re hitting the streets or the gym.', price: 79.99, category: 'Accesories' },
    { id: 7, name: 'Concrete Hoodie',imageUrl: '../assets/images/sweatshirts/gsweat.jpg', description: 'Embrace the street culture with this graphic sweatshirt, featuring bold “I will See You Tomorrow” text and a comfortable, relaxed fit for daily wear.', price: 49.99, category: 'Sweatshirts' },
    { id: 8, name: 'Skater Life Cargo Shorts', imageUrl: '../assets/images/pants/cargos.jpg',description: 'These cargo shorts combine function and style, with plenty of pockets and an edgy, streetwear-inspired look. Perfect for those hot summer days.', price: 34.99, category: 'Shorts' },
    { id: 9, name: 'Orange Beanie', imageUrl: '../assets/images/accesories/beanie.jpg',description: 'Stay warm and stylish with this orange beanie. Made with soft, stretchy knit material that keeps you cozy in the colder months.', price: 14.99, category: 'Accesories' },
    { id: 10, name: 'Rogue Cargo Pants',imageUrl: '../assets/images/pants/rogue.jpg', description: 'Bold cargo pants featuring multiple pockets and a relaxed fit for the ultimate street vibe. Perfect for urban explorers and streetwear lovers.', price: 59.99, category: 'Pants' },
    { id: 11, name: 'Metro Flex Joggers',imageUrl: '../assets/images/pants/metrof.jpg', description: 'Crafted for both comfort and flexibility, these joggers are designed with an adjustable waistband and slim fit. Ideal for a day out or casual streetwear style.', price: 33.99, category: 'Pants' },
    { id: 12, name: 'Retro City Tee', imageUrl: '../assets/images/tshirts/retrotee.jpeg',description: ' A throwback to classic city logos with a modern twist. Soft cotton fabric and a relaxed fit make this tee perfect for everyday wear.', price: 22.99, category: 'T-shirts' },
    { id: 13, name: 'Bold Statement Tee',imageUrl: '../assets/images/tshirts/boldstatement.webp', description: 'A bold graphic t-shirt featuring a large, eye-catching logo. Designed for the fearless streetwear fan who is not afraid to make a statement.', price: 39.99, category: 'T-shirts' },
    { id: 14, name: 'The North Face X Jacket',imageUrl: '../assets/images/jackets/windbear.webp', description: 'Lightweight, water-resistant jacket with sleek urban design. Features reflective elements for added visibility, making it perfect for any time of day.', price: 79.99, category: 'Jackets' },
    { id: 15, name: 'Rough Street Bomber Jacket',imageUrl: '../assets/images/jackets/bomber.webp', description: 'A classic bomber jacket with a rugged look. Featuring a bold back patch and premium quality material, this jacket is both stylish and warm.', price: 74.99, category: 'Jackets' },
    { id: 16, name: 'Skyline High-Top Sneaker',imageUrl: '../assets/images/footwear/hightop.webp', description: 'A bold design that combines comfort with a high-top silhouette. These sneakers are perfect for a street style look with all-day comfort.', price: 89.99, category: 'Footwear' },
    { id: 17, name: 'Urban Bounce Slip-Ons',imageUrl: '../assets/images/footwear/slipons.jpg', description: 'Slip-on sneakers designed with memory foam for maximum comfort. Simple yet stylish, these shoes go with almost any casual outfit.', price: 59.99, category: 'Footwear' },
    { id: 18, name: 'Subway Sling Bag', imageUrl: '../assets/images/accesories/slingbag.webp',description: 'Compact and stylish, this sling bag is perfect for carrying essentials on the go. Features a sleek urban design and adjustable strap for comfort.', price: 29.99, category: 'Accesories' },
    { id: 19, name: 'Simple White Tote Bag', imageUrl: '../assets/images/accesories/toteB.jpg',description: 'A large, sturdy tote bag with a simple white design. Ideal for shopping, gym, or day trips. Spacious and practical for urban living.', price: 39.99, category: 'Accesories' },
    { id: 20, name: 'VA RVCA Cap',imageUrl: '../assets/images/accesories/cap.jpg', description: 'A simple snapback with a clean, modern design. Features embroidered urban-inspired text on the front for a minimalist look.', price: 22.99, category: 'Accesories' },
    { id: 21, name: 'Chill Mode Beanie',imageUrl: '../assets/images/accesories/beanie.jpg', description: ' A cozy knit beanie perfect for colder days. The neutral color and simple design make it a versatile piece to complete any casual look.', price: 18.99, category: 'Accesories' },
    { id: 22, name: 'Vanguard Street Sweatshirt', imageUrl: '../assets/images/sweatshirts/vanguard.jpg',description: 'A modern sweatshirt with a large, bold graphic on the back and the signature urban "Vanguard" logo on the chest. A statement piece for any streetwear enthusiast.', price: 49.99, category: 'Sweatshirts' },
    { id: 23, name: 'Street Hustle Sweatshirt',imageUrl: '../assets/images/sweatshirts/streethustle.webp', description: 'Featuring a sleek design with subtle detailing, this sweatshirt offers a comfortable fit and high-quality fabric, perfect for casual days on the go.', price: 39.99, category: 'Sweatshirts' },
    { id: 24, name: 'Suburbia Denim Shorts', imageUrl: '../assets/images/pants/denimS.jpg',description: 'Distressed denim shorts with a raw hem and vintage-inspired look. Ideal for those sunny urban days, these shorts pair well with any street-style tee.', price: 28.99, category: 'Shorts' },
    { id: 25, name: 'All-City Training Shorts',imageUrl: '../assets/images/pants/trainingS.jpg', description: 'Breathable training shorts with side pockets and a minimalist design. Perfect for sports, workouts, or casual street style.', price: 24.99, category: 'Shorts' },
    { id: 26, name: 'Minimalist Leather Wallet',imageUrl: '../assets/images/accesories/leatherW.jpg', description: 'A sleek leather wallet with multiple compartments for your cards and cash. The simple, minimal design fits perfectly into your pocket or bag.', price: 19.99, category: 'Accesories' },
    { id: 27, name: 'Urban Shades', imageUrl: '../assets/images/accesories/shades.jpeg',description: 'Bold and stylish sunglasses that offer both protection and style. Featuring a sleek, modern design with a matte finish.', price: 24.99, category: 'Accesories' },

  ];
  constructor() { }

  getProducts() {
    return this.products;
  }

  getProductsByCategory(category: string){
    return this.products.filter(product => product.category === category);
  }
}


