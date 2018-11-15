class AddAvatarToRestaurants < ActiveRecord::Migration[5.2]
  def change
  	add_attachment :restaurants, :avatar
  end
end
