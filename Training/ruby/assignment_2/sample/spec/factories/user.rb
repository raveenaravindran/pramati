FactoryBot.define do
  factory :user do
    name "john"
    email "john@example.com"
    password "pw"
  end
  factory :roles do
    name "admin"
  end
end