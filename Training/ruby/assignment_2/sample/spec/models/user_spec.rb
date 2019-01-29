require 'rails_helper'

# RSpec.describe User, type: :model do
#   pending "add some examples to (or delete) #{__FILE__}"
# end

  # describe User, 'validation' do
  #   it { should validate_presence_of(:name) }
  #   it { should validate_presence_of(:phone) }
  #   it { should validate_presence_of(:password) }
  #   it { should validate_presence_of(:email) }

  #   it { should validate_length_of(:password).is_at_least(6).is_at_most(20)}  
  #   it { should validate_length_of(:name).is_at_most(50)}
  #   it { should validate_length_of(:phone).is_at_least(10)}

  #   it { should validate_numericality_of(:phone).only_integer}
  #   it { expect validate_uniqueness_of(:email) }
  # end

  # describe User, 'relations' do
  #   it { should has_and_belongs_to_many : roles }
  #   it { should has_many : addresses }
  #   it { should has_one : cart }
  #   it { should has_many : cart_items, through: :cart }
  # end

  describe User do
  
    let(:user) { create(:user) }
    let(:role) { create(:role) }
    let(:roles_users) { create(:roles_users, role_id: role.id, user_id: user.id) }
    describe '#check_admin?' do
      context 'if an admin' do
        it 'check admin user' do
          user_role_name = roles_users.name
          expect(user_role_name).to eql('admin') 
        end
      end
      context 'if not an admin' do
        it 'check admin user' do
          user_role_name = roles_users.name
          expect(user_role_name).not_to eq('admin')
        end
      end
    end
  end


  # describe User do

  #   let(:user) { FactoryBot.create(:user) }
  #   before do
  #     @user = User.new(name: user.name,phone: user.phone,email: user.email,password: user.password)
  #   end

  #   subject { @user }
  #   it { should be_valid }

  #   describe "when user_id is not present" do
  #     before { @user.user_id = nil }
  #     it { should_not be_valid }
  #   end
# end