class Restaurant < ApplicationRecord
	has_attached_file :avatar, styles:  { thumb: "100x100!", medium: "200x200!" },uniqueness: true
	validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/
	has_many :dishes
end
