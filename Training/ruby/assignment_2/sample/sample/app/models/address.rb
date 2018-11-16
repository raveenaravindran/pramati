class Address < ApplicationRecord
	belongs_to :user


  validates :street,  presence: true, length: { maximum: 50 }
  validates :landmark,  presence: true, length: { maximum: 50 }
  validates :zipcode,  presence: true, length: { maximum: 50 }, numericality: { only_integer: true }
  validates :state,  presence: true, length: { maximum: 50 }
  validates :country,  presence: true, length: { maximum: 50 }
end
