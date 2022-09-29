import React from "react";

import {
  Box,
  Heading,
  SimpleGrid,
  Img,
  Link,
  Container,
  Badge,
  Image,
  Center,
  Text,
  Stack,
  Divider
} from "@chakra-ui/react";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel'
import { StarIcon } from "@chakra-ui/icons";

import Carousel from "better-react-carousel";

const bestDeals = [
  {
    image:
      "https://www.reliancedigital.in/medias/Redmi-9-activ-6GB-128GB-.jpg?context=bWFzdGVyfGltYWdlc3w4NTQ4OXxpbWFnZS9qcGVnfGltYWdlcy9oNTQvaDE2Lzk4OTUzOTgxNDYwNzguanBnfGY5MGUwNzM0MzBmNTE3NzkzMmY0NzZlNDkyZWJlOWVlZTU1MTMzNmMzY2RjNTUwNjUzYWE1MGJiNmIyNmIwN2M",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/ONEPLUS-HD-Smart-LED-TV-1-1-.jpg?context=bWFzdGVyfGltYWdlc3w5OTM5MXxpbWFnZS9qcGVnfGltYWdlcy9oMzcvaDYzLzk4OTU0MDE2ODUwMjIuanBnfDQyNDYxMmU0YmEzMjkzMWZhYjZjM2E3OGRmOGE4MjdkZjc1Y2M3NWM1ZTNhMzYyMWIzNDAwYjVlZGMwNTU4NjM",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Voltas-Beko-Refrigerators.jpg?context=bWFzdGVyfGltYWdlc3w3NTU5N3xpbWFnZS9qcGVnfGltYWdlcy9oYzQvaDg0Lzk4OTg2NTQ1NjQzODIuanBnfGY4MWRjM2UzNWY1NTI3YzM1OGZiOTQ1YTFlMmJhZWJkYjM3N2UxMjIwMWYyNDI3MWUxOWU5MTU0MTRhNzA3YTI",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Best-Deals-on-Core-i5-Laptops.jpg?context=bWFzdGVyfGltYWdlc3w5NTE2OHxpbWFnZS9qcGVnfGltYWdlcy9oYzMvaGY5Lzk4OTUzOTgzNDI2ODYuanBnfDY3ODIxYTM5M2EzMmVhNjc4ZGVmMzQ5ZGM4ZTk5YzE0NTczNDFkNWU2MmNiYTY0ZTNkMjgyMjRkYmY2MGE5NTc",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Speakers-and-Soundbars.jpg?context=bWFzdGVyfGltYWdlc3w3ODUwNHxpbWFnZS9qcGVnfGltYWdlcy9oNWUvaDA4Lzk4OTc0OTcxOTg2MjIuanBnfDIzNjNhNDU5ZDQ1YmY3YjU1NTcxNDM0MDU4N2FjN2U5NWNjZGMwODU5ZDg2ZTI5NWU3ZGFhOTU4NjI5MDQxMzI",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Motorola-E32s.jpg?context=bWFzdGVyfGltYWdlc3w4MDQxMHxpbWFnZS9qcGVnfGltYWdlcy9oNGQvaDRlLzk4OTk5NDg4MzQ4NDYuanBnfDY1ZmEwZjJhMWNlNzdiODBhYTI5NDIzOWExMGY0NmI0ZmQ5Mzk5YTJjZGQ4NTRhMDA0YTgyN2I2Mjc4Yjk0YWM",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Printers.jpg?context=bWFzdGVyfGltYWdlc3w4MTI3N3xpbWFnZS9qcGVnfGltYWdlcy9oNGYvaDUzLzk4OTUzOTg1MzkyOTQuanBnfGVlZWFjYTlhYjhhMDIzZDVlNDdlOTg1N2JkNWZjOTY4NjQwOTMxOWE4ZGQ1MWM3YWU4MjQ0NDM0MzMxNDVkY2Y",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Mixer-Grinders.jpg?context=bWFzdGVyfGltYWdlc3w4NzAxNXxpbWFnZS9qcGVnfGltYWdlcy9oZmEvaDBlLzk4OTc1MDAxMTQ5NzQuanBnfGY3N2U0ZTgwNmFmMDdkNDBiZjlhNTZjY2Q0NDI2N2IxNjQ2YzI1ZjczZjliZWJiMjAxNmJkZjY2YTk4ZTM0MmQ",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Keyboard-Mouse.jpg?context=bWFzdGVyfGltYWdlc3w3OTc4M3xpbWFnZS9qcGVnfGltYWdlcy9oYTYvaGI2Lzk4OTUzOTg2NzAzNjYuanBnfDIzOGU1ZDYyNDBhNjE1ZDViZGFmYmFkMzFkYWIwZTFkYWNlNzMxOGUwNzg1NjhlZWIwZWEyOTkwMWNjMjIzNTU",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/LG-Washing-Machine.jpg?context=bWFzdGVyfGltYWdlc3w3NDI3MnxpbWFnZS9qcGVnfGltYWdlcy9oOGIvaGZiLzk4OTUzOTg3MzU5MDIuanBnfGRkODhlNjMwYzA0NzNhN2NjM2UzM2E2ZjhkNTQ2NWQxOTJmNTdkNmFjOTkzMzhmOWE1OWM0ZmIwZWMyNzQ1MWE",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Best-Deals-from-Audio.jpg?context=bWFzdGVyfGltYWdlc3w3OTkyN3xpbWFnZS9qcGVnfGltYWdlcy9oNjIvaGVlLzk4OTc1MDAxODA1MTAuanBnfDc2MzEwMTExNjFjN2NjZTE5ZGRiYTc2NjNjNGY0ZTcxM2FmYzE3NmMzNjNjYWZiZDE0MTMxYTliMTg1OTVjNWU",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Tecno-Pop-5-LTE.jpg?context=bWFzdGVyfGltYWdlc3w4MDcwNXxpbWFnZS9qcGVnfGltYWdlcy9oZDgvaGRkLzk4OTk5NDg5MDAzODIuanBnfDY2NTAxZDg4NjM5NTA4ZTg1NzcxMDMwYzdmZTQ1ZGNiZTg3MjlmMTVmNjVjNjZhYmY1YTczNWQ3NDYwMjRmOGQ",
  },
];

const festiveOffers = [
  {
    image:
      "https://www.reliancedigital.in/medias/Refrigerators-TOP-PICKS-BY-CATEGORY-1.jpg?context=bWFzdGVyfGltYWdlc3w0MzM3MnxpbWFnZS9qcGVnfGltYWdlcy9oZTgvaGQ2Lzk4OTYyODc0Njk1OTguanBnfDk5N2E5NGIyOWJhMzkyNzlhN2VkOTczZDA2YTI4YjAzYmNiODEyMTNmOTJlNDJlNWU0NjQ4Y2M1N2YzOTM2NjI",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/i3-laptops-TOP-PICKS-BY-CATEGORY.jpg?context=bWFzdGVyfGltYWdlc3w1MDU3OXxpbWFnZS9qcGVnfGltYWdlcy9oYWEvaGU2Lzk4OTUzOTk2NTM0MDYuanBnfDU5ZWJlZThmOTk3Mjg2ZmYwYzdjNmE1ZWM2ZmQ0OTI2ZWIyYzY1NzUwZjY0ZGUxMjM1ZDJkMDNiNzcwNzRlNzA",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Smartwatch-TOP-PICKS-BY-CATEGORY.jpg?context=bWFzdGVyfGltYWdlc3w0ODczOXxpbWFnZS9qcGVnfGltYWdlcy9oOTQvaGVlLzk4OTUzOTk5ODEwODYuanBnfDkxZDJkNzgzMzExZDlmZDE2MjBjNzZiOWQ0MzkzMWNjNDdkNGQ1NDU1YTliZWFkNzM2MzkxNjA3Mzg1OTljNzM",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Samsung-Smart-HD-Ready-TV-TOP-PICKS-BY-CATEGORY.jpg?context=bWFzdGVyfGltYWdlc3w3NDQ3NXxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDMxLzk4OTgzNDk1MjcwNzAuanBnfDQ3MjZlZGJjYzU2N2Q3MmVkMjBlZWIxYTRkNzU2YmJhMmZiMDMwZDIzMWU1OWE0N2RlNDgyNmU2OThlM2ZlYzU",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Tecno-POVA-3-TOP-PICKS-BY-CATEGORY-9-099-.jpg?context=bWFzdGVyfGltYWdlc3w0ODc2OXxpbWFnZS9qcGVnfGltYWdlcy9oMjIvaGUyLzk4OTcyNDkzNzQyMzguanBnfDM4OWMzMGI2MTAzODBkYWQ4ZTAyY2Y5MDI3YjU2ZDJlMTYwNDA2Njk3ZDNmN2I3MTQyYmE4MGU2OWI2YmVmMGI",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Samsung-Galaxy-M53-5G-TOP-PICKS-BY-CATEGORY.jpg?context=bWFzdGVyfGltYWdlc3w2MzQzN3xpbWFnZS9qcGVnfGltYWdlcy9oNzIvaGI4Lzk4OTU0MDAxNzc2OTQuanBnfGVkZTI2OTIzNmMxNTY5Yzc3MDYwMzJkM2VjMGVkN2VmNjcwZTFhNTQyNzA2MzM4Y2U3YTQ1NjgzYjU5NTZlOGE",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Monitor-TOP-PICKS-BY-CATEGORY.jpg?context=bWFzdGVyfGltYWdlc3w1MzA3OHxpbWFnZS9qcGVnfGltYWdlcy9oNDQvaDJjLzk4OTU0MDAyNDMyMzAuanBnfGE1MzA0MjI5ZWYwZGY3NjIyNTRlMzdhNWM1M2ZlZjAxNzcyNjllMTg1NTUxZDE1MzE1NmM0YWZiMmE1NGM5OTY",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Tablets-TOP-PICKS-BY-CATEGORY.jpg?context=bWFzdGVyfGltYWdlc3wzNzUyNnxpbWFnZS9qcGVnfGltYWdlcy9oNjYvaDZlLzk4OTU0MDAwNDY2MjIuanBnfDBmMTlkNmM3ZmM2MWE0N2Y5NzUxOWI3ZTE4N2Q0NzQwM2E2NGNjYWYyZTIwMWIyMDcwMTgzNjc3ZmQ3YTM5Mzg",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Audio-Accesories-TOP-PICKS-BY-CATEGORY.jpg?context=bWFzdGVyfGltYWdlc3w1MTAwMXxpbWFnZS9qcGVnfGltYWdlcy9oYzIvaDY3Lzk4OTU0MDAxMTIxNTguanBnfDI5NGNlZGViY2M0YzVmOGM2MGIxY2VmZTE1YzMwZTNmYjgwYzVhNGQ5ZjQxNjU5MWNlZmViMWUxNTI1ZGZkNjk",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Samsung-Galaxy-M53-5G-TOP-PICKS-BY-CATEGORY.jpg?context=bWFzdGVyfGltYWdlc3w2MzQzN3xpbWFnZS9qcGVnfGltYWdlcy9oNzIvaGI4Lzk4OTU0MDAxNzc2OTQuanBnfGVkZTI2OTIzNmMxNTY5Yzc3MDYwMzJkM2VjMGVkN2VmNjcwZTFhNTQyNzA2MzM4Y2U3YTQ1NjgzYjU5NTZlOGE",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Monitor-TOP-PICKS-BY-CATEGORY.jpg?context=bWFzdGVyfGltYWdlc3w1MzA3OHxpbWFnZS9qcGVnfGltYWdlcy9oNDQvaDJjLzk4OTU0MDAyNDMyMzAuanBnfGE1MzA0MjI5ZWYwZGY3NjIyNTRlMzdhNWM1M2ZlZjAxNzcyNjllMTg1NTUxZDE1MzE1NmM0YWZiMmE1NGM5OTY",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Air-Conditioners-TOP-PICKS-BY-CATEGORY.jpg?context=bWFzdGVyfGltYWdlc3w0NDcwMXxpbWFnZS9qcGVnfGltYWdlcy9oOWIvaDYyLzk4OTU0MDAzMDg3NjYuanBnfDEzNGU5MGRlNGI4NTc0MGJhZmIyZGUxYjAwMjRiZWUwNmM4NzhhZTcxYTkyZWU0YmQ4YmQ5NWNjMjllNWY2ZmM",
  },
];

const bestDealsSlider = [
  {
    image:
      "https://www.reliancedigital.in/medias/pTron-Pulsefit-P261-Carousel-Banner-23-09-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMjY3MzZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDBjL2gyYy85ODk3MjQ5ODY1NzU4LmpwZ3xiNjNmNjJhNDE1Y2JhZmZhMzQyN2NiZDI2YmU0NjljMDEzNzcxM2ZiNTM3Yjg1NzVlMDA0NDYyMDBhMzExOTU1",
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Small-Appliances-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5NDEzNHxpbWFnZS9qcGVnfGltYWdlcy9oYTIvaDQyLzk4OTg2NTQzNjc3NzQuanBnfGFjZjQyODRiZWEwMzgxMGE4MDFiZjEzYjM0N2Q0MmY0ZmI3MzRjNmFiMTkxZWE2Y2FkMzQzN2UyYmU0MjI2NDk",
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Motorola-G71-5G-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5NTEzM3xpbWFnZS9qcGVnfGltYWdlcy9oMzQvaDAwLzk4OTYyOTA4MTE5MzQuanBnfDJiYjFlMjA2YTAxNjA3NzA5YjgzODJlYTJhYzA3MzJkYmIzZDI4MzA0MDdlZjNmZGVkZmFiMjUxNDA0ZmI0ZmU",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Monitors-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5NTQ3MHxpbWFnZS9qcGVnfGltYWdlcy9oOWUvaDYyLzk4OTYyOTEwNzQwNzguanBnfDRhY2I0NDNhYjllZmE5OWIwYjc0ZWU0OTg1YmYwOThhMGY1ZjgwMjg3ODFlM2QzYzcyODA0ZGI4NzdjMmJkZTg",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/alexa-and-fire-TV-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5NjU5MnxpbWFnZS9qcGVnfGltYWdlcy9oNTkvaDhmLzk4OTg5NzUwMDI2NTQuanBnfGU2ZjU0OWU4Njk3MjIxOGU2NDFlNDYwYTk2N2NmZDM5M2Y2MDUzZTQ3Mjk1YjlhYjZhZTk2ZjY3MjgxMTdiZTc",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Printer-Monitor-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5NjcyMXxpbWFnZS9qcGVnfGltYWdlcy9oNmIvaGQ5Lzk4OTcyNDkxNzc2MzAuanBnfDM5YTdmNzMyNmI4YzNkMDgyZDU0ZWUyODQzMzgzZmFlYWE0NGI5NDhmMTcwMmE4YmJkOWJmYzNhNjdmODFkNGU",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Premium-Audio-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5NDA2MnxpbWFnZS9qcGVnfGltYWdlcy9oOTQvaDE2Lzk4OTc0OTIwNTQwNDYuanBnfGFmN2M4MjBkYzQ0ZTRiZTJkYzk1YzM5M2FhZjNhZTg4MjFhMzRmYjRmODU4ZGViYjMzY2FhZDc5ZTYwYTZiNGI",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Xiaomi-HD-Ready-Smart-TV-Carousel-Banner.jpg?context=bWFzdGVyfGltYWdlc3w4NzQwMnxpbWFnZS9qcGVnfGltYWdlcy9oNzIvaGFhLzk4OTg1NDkwODQxOTAuanBnfDBkNGFlNjVlZjY4ODY5MjMyOWZkYTNlNjRlN2I2MzYyZDE1NmU2ZmU0ODI1YjFmNTI3NjZmNmVlMmM1OGQ4Zjg",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Macbooks-Carousel-Banner-D-1-.jpg?context=bWFzdGVyfGltYWdlc3w5MzUxM3xpbWFnZS9qcGVnfGltYWdlcy9oNTkvaDBjLzk4OTYyMzU0OTk1NTAuanBnfGFmOWNmOTIxNmE3NDkyM2IyZGQ5NmNmYWVhMmMwYTBiZDkyZGVjYzViMTQ4MTRkYjM2NGZlZmE5ZGY1YzhjMDA",
  },
];

const festiveOffersSlide = [
  {
    image:
      "https://www.reliancedigital.in/medias/iPhone14-Buy-now-NPI-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5NTIxNHxpbWFnZS9qcGVnfGltYWdlcy9oZmMvaGJkLzk4OTU0MDAzNzQzMDIuanBnfDlmODJlNmQxNDhhNjJkMmE0ZGYwMzhjYjBkMTg4ODMyYzZkMDdhYjhhYzk1MTFlYzhiMGY4YTYyN2JmNDdiYmI",
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Sony-BT-HP-NPI-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5ODc4MnxpbWFnZS9qcGVnfGltYWdlcy9oMzEvaDZjLzk4OTYyOTU2Mjg4MzAuanBnfDU5ZTkwMDQ1YTg0NjBiOGQ1NTMxYmJjNzYwOWMwZWZhZWI1MGU3MTlhNjJiOWI5Y2QzMzUxOTdlYjJmZDc0YTM",
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Vivo-Y22-NPI-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMDc3Mjl8aW1hZ2UvanBlZ3xpbWFnZXMvaDA1L2gxMy85ODk1NDAwNjM2NDQ2LmpwZ3w0ZTE0OTVlMjBiNDFkYjI0ZDRjZDlhNjk3MDQzMmRlMDhkMjdkOTUwN2FlNjY4NGJjYzZkNGFjMzhlNDg1ZGVk",
  },
];

const smartWatches = [
  {
    title:
      "pTron Pulsefit P261 Bluetooth Calling Smartwatch with IP68",
    imageUrl:
      "https://www.reliancedigital.in/medias/pTron-PULSEFIT-P261-Smart-Watch-493177972-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDQ1NHxpbWFnZS9qcGVnfGltYWdlcy9oNzUvaGY1Lzk4OTQ2NzA4OTMwODYuanBnfGVhMWI3MzU3NTMxNmI4MzdiNDZmOTY2MTVmZWQxNzdhOTMwZjJiMjI2YzUxNTllYWU0YTkwYzIyZGIzNmJmYzM",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    offerPrice: 999,
    mrp: 5999,
    reviewCount: 34,
    save: " 83%(₹5000)",
    rating: 4,
  },
  {
    title:
      "pTron Pulsefit P261 Bluetooth Calling Smartwatch with IP68 Waterproof, Pink",
    imageUrl:
      "https://www.reliancedigital.in/medias/Fire-Boltt-BSW007-Smart-Watch-492850759-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTkwMnxpbWFnZS9qcGVnfGltYWdlcy9oMmIvaDBlLzk4NTk3ODYyNzY4OTQuanBnfDdiMTBhZThkYWQ1ZDc5N2Q0NTk5MDJmYjhiYTFmNGU3MTRiMzYwN2M2YzVlMzNhNTI0N2UzMGNkZGZiY2QyMmI",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    offerPrice: 999,
    mrp: 5999,
    reviewCount: 34,
    save: " 83%(₹5000)",
    rating: 4,
  },
  {
    title:
      "pTron Pulsefit P261 Bluetooth Calling Smartwatch with IP68 Waterproof, Pink",
    imageUrl:
      "https://www.reliancedigital.in/medias/Hammer-PULSE-3-0-Smart-Watch-492849894-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjcyMXxpbWFnZS9qcGVnfGltYWdlcy9oMDcvaGU1Lzk4MTQ3MTk5MjIyMDYuanBnfDU4NmIxM2U0OWY3NGRmYjI3ZTA0NDQwN2EzN2ZmMDgwYjllYTQ4ZjU5OGU4MmUwYzVlNDhmN2I0OGNiZTgzYWU",
    imageAlt: "Rear view of modern home with pool",
    
    offerPrice: 999,
    mrp: 5999,
    reviewCount: 34,
    save: " 83%(₹5000)",
    rating: 4,
  },
  {
    title:
      "pTron Pulsefit P261 Bluetooth Calling Smartwatch with IP68 Waterproof, Pink",
    imageUrl:
      "https://www.reliancedigital.in/medias/boAt-Watch-Flash-RTL-Smart-Watches-492574195-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MDAwN3xpbWFnZS9qcGVnfGltYWdlcy9oNDMvaDA3Lzk3NTU3Nzg1NDc3NDIuanBnfDQxZGE4MzYwMzI2NjZiZjJkYWQyM2VmOGNiZTc5OWE0YmU0NTM3ODk3ZjgwMGZlYmNjMThhMTRjZmM5NDMyN2Y",
    imageAlt: "Rear view of modern home with pool",
    offerPrice: 999,
    mrp: 5999,
    reviewCount: 34,
    save: " 83%(₹5000)",
    rating: 4,
  },
  {
    title:
      "pTron Pulsefit P261 Bluetooth Calling Smartwatch with IP68 Waterproof, Pink",
    imageUrl:
      "https://www.reliancedigital.in/medias/Noise-Colorfit-Icon-Plus-Smart-Watch-492850516-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNTk5M3xpbWFnZS9qcGVnfGltYWdlcy9oMzEvaGYyLzk4Nzc2Mzc3NTkwMDYuanBnfDNiMDIzZWUxNjVkZTFkYWQzOTFiYmEyYmRmM2UxMjg1MGY1MWRmNTA1OGE2NTllNzgyMzg1MTVjM2E5NWFmZTU",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    offerPrice: 999,
    mrp: 5999,
    reviewCount: 34,
    save: " 83%(₹5000)",
    rating: 4,
  },
  {
    title:
      "pTron Pulsefit P261 Bluetooth Calling Smartwatch with IP68 Waterproof, Pink",
    imageUrl:
      "https://www.reliancedigital.in/medias/pTron-140318176-Smart-Watch-492850976-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzOTM4MHxpbWFnZS9qcGVnfGltYWdlcy9oNGYvaGJiLzk4OTU1OTAyOTc2MzAuanBnfDFkODRmMGE2ZWMyNTEzY2I5OTI2YzhiZTJkM2I0M2E0Y2NhMWNiNjRmNjA4MGNmMzE4YTZiOTg1NjZlNmRhMzM",
    imageAlt: "Rear view of modern home with pool",
    
    offerPrice: 999,
    mrp: 5999,
    reviewCount: 34,
    save: " 83%(₹5000)",
    rating: 4,
  },
  {
    title:
      "pTron Pulsefit P261 Bluetooth Calling Smartwatch with IP68 Waterproof, Pink",
    imageUrl:
      "https://www.reliancedigital.in/medias/pTron-PULSEFIT-P261-Smart-Watch-493177969-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDUzNnxpbWFnZS9qcGVnfGltYWdlcy9oMGEvaGIzLzk4OTQ2NzAyMzc3MjYuanBnfDJjMTc3ODdhNzNiMTU2YWU2MDM4ZTRlYTQwYTljMDk1MWRmMjgwMWFkNzI4MmM5NTU2MzA3NjUzNjhkYmZkYWI",
    imageAlt: "Rear view of modern home with pool",
    offerPrice: 999,
    mrp: 5999,
    reviewCount: 34,
    save: " 83%(₹5000)",
    rating: 4,
  },
  {
    title:
      "pTron Pulsefit P261 Bluetooth Calling Smartwatch with IP68 Waterproof, Pink",
    imageUrl:
      "https://www.reliancedigital.in/medias/pTron-PULSEFIT-P261-Smart-Watch-493177971-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTY5MHxpbWFnZS9qcGVnfGltYWdlcy9oNWUvaGVjLzk4OTQ2NzEyMjA3NjYuanBnfGU4Zjk4YzFiMWE0MTZhYTk4MTEzYWIzYjJmNDViMGM5ZDY0MmY1ZWM1OWE0NWIyNzc1OGFmMjUwN2EyZjc3YjU",
    imageAlt: "Rear view of modern home with pool",
    offerPrice: 999,
    mrp: 5999,
    reviewCount: 34,
    save: " 83%(₹5000)",
    rating: 4,
  },
  {
    title:
      "pTron Pulsefit P261 Bluetooth Calling Smartwatch with IP68 Waterproof, Pink",
    imageUrl:
      "https://www.reliancedigital.in/medias/pTron-PULSEFIT-P261-Smart-Watch-493177970-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTIyMnxpbWFnZS9qcGVnfGltYWdlcy9oNWYvaGZkLzk4OTQ2NzA1NjU0MDYuanBnfDk4NDQ3YjQ2MmIxMjRhYjMzMmIxYzBkMjFmZjgzODY2ZmIwZjkzNzRmMTRkYTg2NDViOWQxZTRjM2JjNDFjNWU",
    imageAlt: "Rear view of modern home with pool",
    offerPrice: 999,
    mrp: 5999,
    reviewCount: 34,
    save: " 83%(₹5000)",
    rating: 4,
  },
  {
    title:
      "pTron Pulsefit P261 Bluetooth Calling Smartwatch with IP68 Waterproof, Pink",
    imageUrl:
      "https://www.reliancedigital.in/medias/Fire-Boltt-BSW007-Smart-Watch-492850760-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMzEwMXxpbWFnZS9qcGVnfGltYWdlcy9oMjMvaDY2Lzk4NTk3OTkwNTY0MTQuanBnfDEzNzY0MGE3MzkzYjUwMmE4OWNlZThmMjRmMDg3NWI3OWUzZjk3ODAzYzBhOTgzNTBlNjc1M2E2MDFlNjU0ZWI",
    imageAlt: "Rear view of modern home with pool",
    offerPrice: 999,
    mrp: 5999,
    reviewCount: 34,
    save: " 83%(₹5000)",
    rating: 4,
  },
];

function Home() {
  return (
    <div>
      <div>
        <img src="https://www.reliancedigital.in/medias/FOE-Carousel-Banner-Gif.gif?context=bWFzdGVyfGltYWdlc3wxNjA5MzZ8aW1hZ2UvZ2lmfGltYWdlcy9oMGQvaGNiLzk4OTU0MDA4OTg1OTAuZ2lmfDc5MmMxMWQzOTVlZDBkNTRjNTY3ZWZhN2EyZDA1OGZlMGE4YjZhZGFjYmU4NmU2MjIzZjhlOWNjMmRjNTMwMTY"></img>
      </div>

      {/* BEST DEALS ON TRENDING ELECTRONICS */}

      <Box mb="12px">
        <Box mb="32px" pt="32px" px="28px">
          <Heading fontSize="24px" fontWeight="0.7em" mb="20px" pr="10px">
            BEST DEALS ON TRENDING ELECTRONICS
          </Heading>
        </Box>
        <Box px="28px">
          <SimpleGrid columns={[1, 2, 4]}>
            {bestDeals.map((img) => (
              <Box mr="20px" mb="1px">
                <Link>
                  <Img w="100%" src={img.image} />
                </Link>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      <Carousel
        cols={1}
        rows={1}
        gap={10}
        loop={true}
        showDots={true}
        autoplay={2000}
      >
        {bestDealsSlider.map((img) => (
          <Carousel.Item>
            <Link>
              <Img w="100%" src={img.image} />
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
{/* FESTIVE OFFERS ON ELECTRONICS */}
      <Box mb="32px">
        <Box mb="32px" pt="32px" px="28px">
          <Heading fontSize="24px" fontWeight="0.7em" mb="20px" pr="10px">
            FESTIVE OFFERS ON ELECTRONICS
          </Heading>
        </Box>
        <Box px="28px">
          <SimpleGrid columns={[2, 3, 4]}>
            {festiveOffers.map((img) => (
              <Box mr="20px" mb="1px">
                <Link>
                  <Img w="100%" src={img.image} />
                </Link>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      <Carousel
        cols={1}
        rows={1}
        gap={10}
        loop={true}
        showDots={true}
        autoplay={2000}
      >
        {festiveOffersSlide.map((img) => (
          <Carousel.Item>
            <Link>
              <Img w="100%" src={img.image} />
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>

     
      <Box pb="32px">

      <Box mb="32px" pt="32px" px="28px"><Heading  as="span" fontSize="24px" fontWeight="0.7em" mb="20px" pr="10px" >SMARTWATCHES AT RS.999</Heading> <Link Link as="span" borderLeft="1px" color="blue" px="12px"> View All</Link></Box>

        <Carousel cols={5} rows={1} gap={6} loop={true} showDots={false} responsiveLayout={[
  {
    breakpoint: 800,
    cols: 3,
    rows: 1,
    gap: 10,
    loop: true
  }
]}>
          {smartWatches.map((watch) => (
            <Carousel.Item>

              <Box textAlign="left">
                <Box w="220px" h="185px">
                <Image cursor="pointer" w="180px" _hover={{
                    w: "190px",
                  }} src={watch.imageUrl} alt={watch.imageAlt} />

                </Box>
                
                <Box
                color="#003380"
                  mt="1"
                  fontWeight="400"
                  as="p"
                  fontSize="15px"
                  lineHeight="tight"
                  noOfLines={2}
                  _hover={{
                    color: "red",
                  }}
                  cursor="pointer"
                  mb="15px"
                >
                 {watch.title}
                </Box>

                <Box display="flex" mt="2" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={
                          i < watch.rating ? "rgb(255, 164, 28)" : "gray.300"
                        }
                      />
                    ))}
                  <Box
                    as="span"
                    ml="2"
                    color="rgb(0, 51, 128)"
                    fontSize="sm"
                    fontWeight="500"
                  >
                    ( {watch.reviewCount} reviews)
                  </Box>
                </Box>

                <Box color="#666" fontSize="14px" >
                  <Box>
                    Offer Price:
                    <Box
                      as="span"
                      color="black"
                      fontSize="15px"
                      fontWeight="bold"
                    >
                      ₹{watch.offerPrice}.00
                    </Box>
                  </Box>

                  <Box>
                    M.R.P:
                    <Box as="span" as="s">
                      ₹{watch.mrp}
                    </Box>
                  </Box>

                  <Box>
                    You Save:
                    <Box as="span" >
                      {watch.save}
                    </Box>
                  </Box>

                  <Badge
                    borderRadius="full"
                    px="2"
                    colorScheme="green"
                    border="1px"
                    fontSize="10px"
                  >
                    OFFERS AVAILABLE
                  </Badge>
                </Box>
              </Box>
            </Carousel.Item>
          ))}
        </Carousel>
      </Box>

      <Divider border="0.5px"/>

      <Box pb="32px">

      <Box mb="32px" pt="32px" px="28px"><Heading  as="span" fontSize="24px" fontWeight="0.7em" mb="20px" pr="10px" >SMARTWATCHES AT RS.999</Heading> <Link Link as="span" borderLeft="1px" color="blue" px="12px"> View All</Link></Box>

        <Carousel cols={5} rows={1} gap={6} loop={true} showDots={false} responsiveLayout={[
  {
    breakpoint: 800,
    cols: 3,
    rows: 1,
    gap: 10,
    loop: true
  }
]}>
          {smartWatches.map((watch) => (
            <Carousel.Item>

              <Box textAlign="left">
                <Box w="220px" h="185px">
                <Image cursor="pointer" w="180px" _hover={{
                    w: "190px",
                  }} src={watch.imageUrl} alt={watch.imageAlt} />

                </Box>
                
                <Box
                color="#003380"
                  mt="1"
                  fontWeight="400"
                  as="p"
                  fontSize="15px"
                  lineHeight="tight"
                  noOfLines={2}
                  _hover={{
                    color: "red",
                  }}
                  cursor="pointer"
                  mb="15px"
                >
                 {watch.title}
                </Box>

                <Box display="flex" mt="2" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={
                          i < watch.rating ? "rgb(255, 164, 28)" : "gray.300"
                        }
                      />
                    ))}
                  <Box
                    as="span"
                    ml="2"
                    color="rgb(0, 51, 128)"
                    fontSize="sm"
                    fontWeight="500"
                  >
                    ( {watch.reviewCount} reviews)
                  </Box>
                </Box>

                <Box color="#666" fontSize="14px" >
                  <Box>
                    Offer Price:
                    <Box
                      as="span"
                      color="black"
                      fontSize="15px"
                      fontWeight="bold"
                    >
                      ₹{watch.offerPrice}.00
                    </Box>
                  </Box>

                  <Box>
                    M.R.P:
                    <Box as="span" as="s">
                      ₹{watch.mrp}
                    </Box>
                  </Box>

                  <Box>
                    You Save:
                    <Box as="span" >
                      {watch.save}
                    </Box>
                  </Box>

                  <Badge
                    borderRadius="full"
                    px="2"
                    colorScheme="green"
                    border="1px"
                    fontSize="10px"
                  >
                    OFFERS AVAILABLE
                  </Badge>
                </Box>
              </Box>
            </Carousel.Item>
          ))}
        </Carousel>
      </Box>
    </div>
  );
}

export default Home;
