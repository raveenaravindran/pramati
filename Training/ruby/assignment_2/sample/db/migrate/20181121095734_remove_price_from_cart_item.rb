class RemovePriceFromCartItem < ActiveRecord::Migration[5.2]
  def change
    remove_column :cart_items, :price, :string
  end
end
