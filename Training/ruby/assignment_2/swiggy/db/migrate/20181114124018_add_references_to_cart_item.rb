class AddReferencesToCartItem < ActiveRecord::Migration[5.2]
  def change
    add_reference :cart_items, :cart, foreign_key: true
    add_reference :cart_items, :user, foreign_key: true
  end
end
