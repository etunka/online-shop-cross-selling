export type ChildProduct = {
  attributes: {
    name: string;
    value: string;
  }[];
  price: {
    attributes: {
      sale_price: {
        amount: number;
      };
    };
  };
};

export type CrossSellProductType = {
  attributes: {
    product: {
      attributes: {
        main_image: {
          image_sizes: {
            small: string;
          };
        };
        name: string;
        price: {
          available_max_regular_price: {
            amount: number;
          };
        };
        product_attributes: {
          [key: string]: string[];
        };
        rollup_attributes: string[] | null;
      };
    };
  };
};

export interface ProductResponseData {
  data: {
    attributes: {
      main_image: {
        image_sizes: {
          medium: string;
        };
      };
      brand: {
        attributes: {
          name: string;
        };
      };
      child_products?: ChildProduct[];
      product_classification: string;
      price: {
        attributes: {
          available_max_regular_price: {
            amount: number;
          };
        };
      };
    };
  };
}

export interface CrossSellResponseData {
  data: {
    hits: CrossSellProductType[];
  };
}
