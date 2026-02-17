// src/data/products.js

export const products = [
  // Produtos Físicos
  {
    id: 1,
    type: 'physical',
    name: 'Teclado Mecânico RGB Gamer',
    price: 450.00,
    image: 'https://static.wixstatic.com/media/4f5a2c_e682aa0bfd104b57a5930ddb7eec1dd8~mv2.jpeg/v1/fill/w_256,h_256,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/4f5a2c_e682aa0bfd104b57a5930ddb7eec1dd8~mv2.jpeg',
    stock: 5,
    rating: 4.5,
    reviews: 230,
    shipping: 'Frete grátis',
    badges: ['novo', 'estoque-baixo']
  },
  {
    id: 2,
    type: 'physical',
    name: 'Mouse Gamer Wireless 16000 DPI',
    price: 289.90,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGm7w5k6EXS2Khv8_Brupf_gOGVMap-FfwxA&s',
    stock: 23,
    rating: 4.7,
    reviews: 445,
    shipping: 'Frete grátis',
    badges: ['mais-vendido']
  },
  {
    id: 3,
    type: 'physical',
    name: 'Headset Gamer 7.1 Surround',
    price: 320.00,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHotrFOT-7SABA7hMXlAb2SmCERD88jwS0Q&s',
    stock: 45,
    rating: 4.3,
    reviews: 189,
    shipping: 'Entrega em 3 dias',
    badges: []
  },
  {
    id: 4,
    type: 'physical',
    name: 'Webcam Full HD 1080p com Microfone',
    price: 199.90,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSswNSWHovSPLBnIwXLWoD4QBSD1r7MghjHtw&s',
    stock: 2,
    rating: 4.6,
    reviews: 312,
    shipping: 'Frete grátis',
    badges: ['promocao', 'estoque-baixo']
  },
  {
    id: 5,
    type: 'physical',
    name: 'Mousepad Gamer XXL Extended',
    price: 89.90,
    image: 'https://media.spdigital.cl/thumbnails/products/xbx02xts_9c38c8d8_thumbnail_256.jpg',
    stock: 67,
    rating: 4.4,
    reviews: 523,
    shipping: 'Entrega em 2 dias',
    badges: []
  },

  // Produtos Digitais
  {
    id: 6,
    type: 'digital',
    name: 'Curso Completo de React e Next.js',
    price: 297.00,
    image: 'https://b.thumbs.redditmedia.com/8RJ1zsSxLbTrSrRAhziwMynfkWVcuFNMXPsLqtGct1o.png',
    downloadSize: '2.5GB',
    format: 'Video HD + PDF + Código',
    rating: 4.8,
    reviews: 1543,
    badges: ['mais-vendido', 'destaque']
  },
  {
    id: 7,
    type: 'digital',
    name: 'eBook: JavaScript Moderno do Zero',
    price: 49.90,
    image: 'https://a.thumbs.redditmedia.com/zDOFJTXd6fmlD58VDGypiV94Leflz11woxmgbGY6p_4.png',
    downloadSize: '45MB',
    format: 'PDF + EPUB',
    rating: 4.6,
    reviews: 892,
    badges: ['promocao']
  },
  {
    id: 8,
    type: 'digital',
    name: 'Template SaaS Dashboard Premium',
    price: 149.00,
    image: 'https://kanhasoft.com/assets/images/megamenu/amazon-seller-tools.svg',
    downloadSize: '180MB',
    format: 'React + Tailwind + Docs',
    rating: 4.9,
    reviews: 267,
    badges: ['novo', 'destaque']
  },
  {
    id: 9,
    type: 'digital',
    name: 'Pack de Ícones SVG - 5000 ícones',
    price: 79.90,
    image: 'https://cdn.prod.website-files.com/611a19ba853b746b32f6b402/642da3d4e98a8e5ab409c65b_Zapier.svg',
    downloadSize: '320MB',
    format: 'SVG + PNG + Figma',
    rating: 4.5,
    reviews: 634,
    badges: []
  },
  {
    id: 10,
    type: 'digital',
    name: 'Curso: TypeScript para React Developers',
    price: 197.00,
    image: 'https://thiagolopesdev.com.br/_next/static/media/typescript.e2083e1d.svg',
    downloadSize: '1.8GB',
    format: 'Video Full HD + Exercícios',
    rating: 4.7,
    reviews: 421,
    badges: ['mais-vendido']
  },

  // Serviços
  {
    id: 11,
    type: 'service',
    name: 'Consultoria Web Development',
    price: 150.00,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMRe5MjXQVmYZrID8UyZutKdoJRe6yZGII-A&s',
    duration: '1 hora',
    availability: 'Disponível hoje',
    rating: 5.0,
    reviews: 89,
    badges: ['destaque']
  },
  {
    id: 12,
    type: 'service',
    name: 'Code Review Profissional',
    price: 200.00,
    image: 'https://creativecode.com.br/wp-content/themes/creativecode/images/validation.png',
    duration: '2 horas',
    availability: 'Disponível em 2 dias',
    rating: 4.9,
    reviews: 156,
    badges: ['mais-vendido']
  },
  {
    id: 13,
    type: 'service',
    name: 'Mentoria Carreira Tech - Sessão',
    price: 120.00,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlKF_6eGWX4BpONtqaQ6Km5TkaTO7x2zbung&s',
    duration: '1 hora',
    availability: 'Disponível amanhã',
    rating: 4.8,
    reviews: 234,
    badges: []
  },
  {
    id: 14,
    type: 'service',
    name: 'Setup de Projeto Next.js + TypeScript',
    price: 250.00,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJJK4nc51k5y_WK4Xn-Yrmv86DYctNoypRw&s',
    duration: '3 horas',
    availability: 'Disponível em 1 semana',
    rating: 4.7,
    reviews: 67,
    badges: ['novo']
  },
  {
    id: 15,
    type: 'service',
    name: 'Auditoria de Performance Web',
    price: 300.00,
    image: 'https://cdn-icons-png.freepik.com/256/10771/10771714.png',
    duration: '4 horas',
    availability: 'Disponível em 3 dias',
    rating: 5.0,
    reviews: 42,
    badges: ['destaque', 'promocao']
  }
];