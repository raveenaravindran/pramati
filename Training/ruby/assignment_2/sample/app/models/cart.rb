class Cart < ApplicationRecord
  belongs_to :user
  has_many :cart_items

  def update_restaurant(new_restaurant)
    cart_restaurant = self.update_attributes(restaurant_id: new_restaurant)
  end
end
