class ProductsController < ApplicationController
  
#  protect_from_forgery except: [ :update ]
#  respond_to :html
#  layout :nil

  def show
    @product = Product.find(params[:id])
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      render :show
    else
      # TODO: fixme
      render json: { error_messages: ["something wrong"] }, status: 500
    end
  end

  def update
    @product = Product.find(params[:id])
    if @product.update(product_params)
      render :show
    else
      dddd
      # TODO: fixme
      render json: { error_messages: ["something wrong"] }, status: 500
    end
  end
  
  def destroy
    @product = Product.find(params[:id])
    @product.destroy
    render :show
  end

  private

  def product_params
    params.require(:product).permit(Product::PERMITTED_ATTRIBUTES)
#    params.fetch(:product, {})
  end
end