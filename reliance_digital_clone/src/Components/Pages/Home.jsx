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

const smartPhones = [
  {"id": "1-mobile",
  "title":"Samsung Galaxy S21 FE 5G 128 GB, 8 GB, Graphite, Mobile Phone",
  "image":"https://www.reliancedigital.in/medias/Samsung-SM-G990EZAIINU-Smartphone-492575018-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4ODU2OHxpbWFnZS9qcGVnfGltYWdlcy9oNmIvaDA5Lzk4NzkxNzc3NTY3MDIuanBnfDY3NTcyYWI1ZjU2NGE5NTVmMDFmNDNhOTRkNWMyNDkyNzc3NjQ4ZTE0N2FhZjg3ODIxZjQxNTVkNzc3ZmJjNzM",
  "offerPrice":1299,
  "mrp":2099,
  "review":"77",
  "save":"80%(₹1001)",
  "rating":3
  },
  
  {"id": "2-mobile",
  "title":"OnePlus 9 128 GB, 8 GB RAM,Arctic Sky,Mobile Phone",
  "image":"https://www.reliancedigital.in/medias/Motorola-G62-Mobile-Phone-493177199-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyODQ4MXxpbWFnZS9qcGVnfGltYWdlcy9oZTcvaDI2Lzk4NzMyNjcwNjQ4NjIuanBnfGNiMDM4OTg1MzJhOGUzZjcyOWYxNGI3ZTdlODFmOTM5MmU5NWM1Yzk5YzJjNzgwMTcwMjYxNDc5ZDIzYWU4ZGU",
  "offerPrice":37999,
  "mrp":49999,
  "review":"57",
  "save":"24%(₹12000)",
  "rating":"4"
  },
                                                                                                             
  {"id":"3-mobile",
  "title":"Motorola G31 128 GB, 6GB RAM, Meteorite Gray,Mobile Phone",
  "image":"https://www.reliancedigital.in/medias/Moto-G31-Smartphone-492849085-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzA5NHxpbWFnZS9qcGVnfGltYWdlcy9oY2UvaDFjLzk4MTM2NDc1NTY2MzguanBnfDc1ZDRlMzhkNGU5YTk5Nzc1MDY3NTQyOTY5MTA0ZDI1N2E1MjY1YjcyNDUyODA0M2RkNzc1NWUyZTlkNDhlOGM",
  "offerPrice":13999,
  "mrp":16999,
  "review":"60",
  "save":"18%(₹3000)",
  "rating":"5"
  }, 
    
  {"id":"4-mobile",
  "title":"Oppo K10 128 GB,8 GB RAM,Black Carbon, Mobile Phone",
  "image":"https://www.reliancedigital.in/medias/Oppo-K10-Smartphone-492849761-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NTYxNHxpbWFnZS9qcGVnfGltYWdlcy9oYTQvaDI5Lzk4NzAzMjgzMzIzMTguanBnfGEyOWM2ZjE1YTZhNzVlODgyM2E1OGQyZmQ1NTQyZDgwNTYxMzgwZDZiOWIyZjczYzBjMzVlOTM0ZDIxYzM5ODM",
  "offerPrice":16990,
  "mrp":22999,
  "review":"70",
  "save":"26%(₹6009)",
  "rating":"4"
},
   
  {"id":"5-mobile",
  "title":"Vivo T1x 128 GB, 6 GB RAM, Space Blue,Mobile Phone",
  "image":"https://www.reliancedigital.in/medias/Vivo-T1x-Smart-Phones-493177044-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NzQyMHxpbWFnZS9qcGVnfGltYWdlcy9oYWMvaDY3Lzk4NjUzNjM0MjMyNjIuanBnfDAyMGE4YTg5OGUyYjBjZDYwZWFkMzBmMjQ5YWM0Mzg2NjYzMDIyMDlhYWVlZmFjNmY0YmYwNWM5YmU3YjkwMGM",
  "offerPrice":14999,
  "mrp":18990,
  "review":"80",
  "save":"21%(₹3991)",
  "rating":"3"
  },
  
  {"id":"6-mobile",
  "title":"Oppo A57 64GB, 4GB RAM,Glowing Green, Mobile Phone",
  "image":"https://www.reliancedigital.in/medias/Oppo-A57-Smart-Phones-492850647-i-492850647-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1NjU1M3xpbWFnZS9qcGVnfGltYWdlcy9oOTcvaGIyLzk4NDcyMjg0NjUxODIuanBnfDAyYzY4OTY5ZmJkMzU1NjlmNGUwNjQ4YzE4ZjJlZDk3ZDBjMWEwOTU5ZmI0ZGEzNzRjMzU1NmFmNjlmYTA3Njk",
  "offerPrice":13999,
  "mrp":16990,
  "review":"60",
  "save":"18%(₹2991)",
  "rating":"4"
  },
  
  {"id":"7-mobile",
  "title":"Motorola G62 5G 128 GB, 6 GB RAM, Frosted Blue, Mobile Phone",
  "image":"https://www.reliancedigital.in/medias/Motorola-G62-Mobile-Phone-493177199-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyODQ4MXxpbWFnZS9qcGVnfGltYWdlcy9oZTcvaDI2Lzk4NzMyNjcwNjQ4NjIuanBnfGNiMDM4OTg1MzJhOGUzZjcyOWYxNGI3ZTdlODFmOTM5MmU5NWM1Yzk5YzJjNzgwMTcwMjYxNDc5ZDIzYWU4ZGU",
  "offerPrice":17999,
  "mrp":21999,
  "review":"80",
  "save":"18%(₹4000)",
  "rating":"3"
  },
  
  {"id":"8-mobile",
  "title":"Motorola G51 5G 64 GB, 4 GB RAM, Indigo Blue, Mobile Phone",
  "image":"https://www.reliancedigital.in/medias/Motorola-G51-PAS80007IN-SMART-PHONE-492849093-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjMzNHxpbWFnZS9qcGVnfGltYWdlcy9oOWYvaGFmLzk3ODYyMzk2MTUwMDYuanBnfGUwYWQ4MjI2MDc0OTI1ZDYyMmYxNjk0ZjllZGYyYTUyNjQ3MmZjNmMzNGY1ZjM4NDUxMGFjYzNhMWYwZDZjOWM",
  "offerPrice":14999,
  "mrp":17999,
  "review":"60",
  "save":"17%(₹3000)",
  "rating":"2"
  },
  
  {"id":"9-mobile",
  "title":"One Plus 10R 5G 128 GB,8 GB RAM, Forest Green, Mobile Phone",
  "image":"https://www.reliancedigital.in/medias/One-Plus-10R-Mobile-Phone-492850198-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDAwOHxpbWFnZS9qcGVnfGltYWdlcy9oMWUvaDk5Lzk4NzM5Nzg1MjM2NzguanBnfDM3N2IxOGQ0MmQ2YTZjMmUyZDcwYWRlNmI2MThjMDM5OTYwNDE2NzUyZDQ2M2E5OTYwODczNzU1OTIxYjBlYTM",
  "offerPrice":32999,
  "mrp":38999,
  "review":"1",
  "save":"15%(₹6000)",
  "rating":"5"
  },
  
  {"id":"10-mobile",
  "title":"Motorola Moto Edge 30 5G 128GB, 6GB RAM,Meteor Grey",
  "image":"https://www.reliancedigital.in/medias/Motorola-EDGE-30-Mobile-Phone-492912756-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMTU3NXxpbWFnZS9qcGVnfGltYWdlcy9oN2YvaGE2Lzk4MzE2ODY0MDYxNzQuanBnfGM4NWUwNjRiMTgzYTMyM2ZmYWZkN2I0MTNkY2M0ZjdmMTNlZTc3MmZmODI2ZmZmNGFkOWQxMjc2MzRlZDVmZDg",
  "offerPrice":27999,
  "mrp":30999,
  "review":"40",
  "save":"10%(₹3000)",
  "rating":"3"
  },
  
  {"id":"11-mobile",
  "title":"Vivo X80 5G 128 GB,8 GB RAM, Cosmic Black, Mobile Phone",
  "image":"https://www.reliancedigital.in/medias/Vivo-X80-Smartphone-492850419-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MDk4OHxpbWFnZS9qcGVnfGltYWdlcy9oNzAvaGQ2Lzk4MzI1ODYyODA5OTAuanBnfDk5ZDNiMTY0MjU0MGViNDc1ZDg0ZDIyZmY4NmEwNWE0MTkxNmI1MWJlNmZiYWZkNjA0N2QxYTU0NmU1MmY3OWM",
  "offerPrice":54999,
  "mrp":56990,
  "review":"20",
  "save":"3%(₹1991)",
  "rating":"2"
  },
  
  {"id":"12-mobile",
  "title":"Redmi Note 11T 5G 128GB, 8GB RAM , Aquamarine Blue, Mobile Phone",
  "image":"https://www.reliancedigital.in/medias/Redmi-Note-11T-Smartphone-492574112-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDkwNHxpbWFnZS9qcGVnfGltYWdlcy9oNGMvaDQ4Lzk3NzQ0NzczNzc1NjYuanBnfDA0MTBmZTgzNTM2YmIwYTA3YTk1YTNjMWEwYjUwZTMzYTAyOTQ2OTM5Yzk1MGIzMTQ1ZGZiODg2OTI0ZjdhMjA",
  "offerPrice":16999,
  "mrp":22999,
  "review":"50",
  "save":"26%(₹6000)",
  "rating":"3"
  },
  
  {"id":"13-mobile",
  "title":"itel A23 Pro 8 GB RAM, Lake Blue, Mobile Phone",
  "image":"https://www.reliancedigital.in/medias/itel-A23Pro-8GB-1GB-RAM-491996691-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNDY1M3xpbWFnZS9qcGVnfGltYWdlcy9oOWEvaGU1Lzk1NDU0MzE4NzU2MTQuanBnfGU3OTIxZGZiMGU0MTBmMTZiMzliYzQzNzhkMTE1Y2UyYmQyNWIwMDYyZThiYjU0NGRhODk3ZDI5Mjk1M2M1ZmI",
  "offerPrice":4040,
  "mrp":4999,
  "review":"20",
  "save":"19%(₹959)",
  "rating":"4"
  },
  
  {"id":"14-mobile",
  "title":"realme C25Y 64 GB, 4 GB RAM, Glacier Blue,Mobile Phone",
  "image":"https://www.reliancedigital.in/medias/realme-C25Y-Smartphones-491998358-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3OTAzNHxpbWFnZS9qcGVnfGltYWdlcy9oY2IvaDFlLzk2NzM1NTUxODE1OTguanBnfDBkZDVhOGU3NDZjNmQ4ZDU0ZjdkNTU3ZGNjYzEwNjllM2E2ZmY1ZmU1Y2UzZjIwNWI1Y2Q0Yzg5MjczOGM0ZWM",
  "offerPrice":10999,
  "mrp":12999,
  "review":"40",
  "save":"15%(₹2000)",
  "rating":"3"
  },
  
  {"id":"15-mobile",
  "title":"Itel Vision 2S 32 GB,2 GB RAM, Deep Blue, Mobile Phone",
  "image":"https://www.reliancedigital.in/medias/Itel-Vision-2S-Smartphones-491997913-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3ODExNHxpbWFnZS9qcGVnfGltYWdlcy9oOWIvaDhlLzk2NTc0MTI0ODUxNTAuanBnfDAzMDdkNjNiZjhiMzg5MjMxMWY1OWZjNTE4ZDcyMDY3Yjc5YjRlNjk5ZmEwMDhlZGZhZGRhMzIzZjliMzA0YTk",
  "offerPrice":7349,
  "mrp":8499,
  "review":"20",
  "save":"14%(₹1150)",
  "rating":"4"
  }
  ]

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
          {smartPhones.map((watch) => (
            <Carousel.Item>

              <Box textAlign="left">
                <Box w="220px" h="185px">
                <Image cursor="pointer" w="180px" _hover={{
                    w: "190px",
                  }} src={watch.image} alt={watch.imageAlt} />

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
