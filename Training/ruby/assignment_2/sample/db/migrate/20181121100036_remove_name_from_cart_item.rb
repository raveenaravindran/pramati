class RemoveNameFromCartItem < ActiveRecord::Migration[5.2]
  def change
    remove_column :cart_items, :name, :string
  end
end
