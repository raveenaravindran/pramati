class CartItem < ApplicationRecord
  belongs_to :cart
  belongs_to :dish
  # belongs_to :user

  def cart_item_count
   return self.cart_items.group_by(&:cart_id).count
   binding.pry
 end
end
