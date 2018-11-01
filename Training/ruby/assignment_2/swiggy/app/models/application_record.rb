class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  validates :name, :presence => {:message => "Name can't be blank." }
  validates :phone, :presence => {:message => "Phone can't be blank." }
  validates :email, :presence => {:message => "Email can't be blank." }
  validates :password, :presence => {:message => "Password can't be blank." }
  validates_presence_of :name, :with => /^[-\w\._@]+$/i, :allow_blank => false, :message => "should only contain letters, numbers, or .-_@"
end
