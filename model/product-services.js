class ProductServices{
    getListProductApi(){
        const promise= axios({
    url: "https://683dacde199a0039e9e66eed.mockapi.io/api/Products",
    method: "GET",
  });
  return promise;
    }
    deleteProcudtApi(id){
      const promise=axios({
url:`https://683dacde199a0039e9e66eed.mockapi.io/api/Products/${id}`,
method:"DElETE",
      });
      return promise;
    }
    addProductApi(product){
      const promise=axios({
        url:`https://683dacde199a0039e9e66eed.mockapi.io/api/Products`,
        method:"POST",
        data:product,
      });
      return promise;
    }
    
  getProductById(id) {
    const promise = axios({
      url: `https://683dacde199a0039e9e66eed.mockapi.io/api/Products/${id}`,
      method: "GET",
    });

    return promise;
  }

  updateProductApi(product) {
    const promise = axios({
      url: `https://683dacde199a0039e9e66eed.mockapi.io/api/Products/${product.id}`,
      method: "PUT",
      data: product,
    });

    return promise;
  }
}
export default ProductServices;