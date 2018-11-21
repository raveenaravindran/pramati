class AddRestaurantToCart < ActiveRecord::Migration[5.2]
  def change
    add_reference :carts, :restaurant, foreign_key: true
  end
end
