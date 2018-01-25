class Api::CustomersController < ApplicationController
  def index
    @customers = Customer
      .all
      .page(params[:page])
      .per(100)
  end

  def show
    @customer = Customer.find(params[:id])
  end

  def create
    @customer = Customer.new(customer_params)
    if @customer.save
      render :show
    else
      # TODO: fixme
      render json: { error_messages: ["something wrong"] }, status: 500
    end
  end

  def update
    @customer = Customer.find(params[:id])
    if @customer.update(customer_params)
#       puts @test.inspect
      render :show
    else
      # TODO: fixme
      render json: { error_messages: ["something wrong"] }, status: 500
    end
  end
  
  def destroy
    @customer= Customer.find(params[:id])
    @customer.destroy
    render :show
  end

  def autocomplete
    @customers = Customer.autocomplete(params[:term])
#    render json: @communities.map{ |community| { label: community.name, id: community.id } }
  end

  private

  def customer_params
#     @test = ActionController::Parameters
#       .new(JSON.parse(request.body.read))
    params.require(:customer)
      .permit(Customer::PERMITTED_ATTRIBUTES)
  end
end
