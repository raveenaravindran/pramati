class User < ApplicationRecord

	has_and_belongs_to_many :roles
  has_many :addresses
	has_secure_password
	validates :name,  presence: true, length: { maximum: 50 }
  validates :phone, presence: true, length: { minimum: 10 }, numericality: { only_integer: true }
 
  validates :password,  presence: true, length: { in: 6..20 }
  before_save { self.email = email.downcase }
  validates :email, presence: true, format: { with: /[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{1,4}/i }, uniqueness: true, case_sensitive: false


  def check_admin?
    self.roles.map(&:name).include?('admin') == true
  end

end
