class Product {
  constructor(
    _id,
    _name,
    _price,
    _screen,
    _blackCamera,
    _frontCamera,
    _img,
    _description,
    _type
  ) {
    this.id=_id;
    this.name=_name;
    this.price=_price;
    this.screen=_screen;
    this.blackCamera=_blackCamera;
    this.frontCamera=_frontCamera;
    this.img=_img;
    this.description=_description;
    this.type=_type;
  }
}
export default Product
