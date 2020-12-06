import { CrossSellProductType } from "../types";

export const parentCrossSellProductData: CrossSellProductType = {
  attributes: {
    product: {
      attributes: {
        main_image: {
          image_sizes: {
            small:
              "https://pictures.nelson.nl/images/productimages/9/95/959/95902580-25/95902580-25-1-100.jpg",
          },
        },

        name: "Nelson 3-pack Socks",
        price: {
          available_max_regular_price: {
            amount: 7.99,
          },
        },
        product_attributes: {
          orderable_shoe_size_eu: ["40-46", "36-42"],
          shoe_size_eu: ["40-46", "36-42"],
        },

        rollup_attributes: ["shoe_size_eu"],
      },
    },
  },
};

export const standaloneCrossSellProductData: CrossSellProductType = {
  attributes: {
    product: {
      attributes: {
        main_image: {
          image_sizes: {
            small:
              "https://pictures.nelson.nl/images/productimages/9/95/959/95902580-25/95902580-25-1-100.jpg",
          },
        },

        name: "Nelson 3-pack Socks",
        price: {
          available_max_regular_price: {
            amount: 7.99,
          },
        },
        product_attributes: {},

        rollup_attributes: null,
      },
    },
  },
};
