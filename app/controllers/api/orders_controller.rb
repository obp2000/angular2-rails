class Api::OrdersController < ApplicationController
  def index
    @orders = Order.with_customer.page(params[:page]).per(100)
  end

  def show
    @order = Order.find(params[:id])
    @customer = @order.customer
    @order_items = @order
    			   .order_items
    			   .select("order_items.*")
    			   .select("products.density, products.width, products.price product_price")
    			   .joins(:product)
  end

  def create
    @order = Order.new(order_params)
    if @order.save
      render :show
    else
      # TODO: fixme
      render json: { error_messages: ["something wrong"] }, status: 500
    end
  end

  def update
#   	order_items_params = params[:order][:order_items]
#   	params[:order].delete(:order_items)
#   	params[:order][:order_items_attributes] = order_items_params
#   	p params
#   	p 'ddddddddddd'
    @order = Order.find(params[:id])
    if @order.update(order_params)
#       puts @test.inspect
      render :show
    else
      # TODO: fixme
      render json: { error_messages: ["something wrong"] }, status: 500
    end
  end
  
  def destroy
    @order = Order.find(params[:id])
    @order.destroy
    render :show
  end

  private

  def order_params
    params.require(:order)
      .permit(Order::PERMITTED_ATTRIBUTES)
  end
end
