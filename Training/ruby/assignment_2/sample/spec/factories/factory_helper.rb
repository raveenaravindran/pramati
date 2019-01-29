FactoryBot.define do
  factory :user do
    name { "john" }
    phone { "1234567899" }
    email { "john@example.co.in" }
    password { "password" }

    after(:build) do |user, role|
      user.role << FactoryBot.create(:name)
    end
  end

  factory :role do
    name { "admin" }
  end

  factory :roles_users do
    association :user, factory: [:user, :role]  
  end
end