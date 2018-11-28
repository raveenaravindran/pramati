require 'rails_helper'

# RSpec.describe User, type: :model do
#   pending "add some examples to (or delete) #{__FILE__}"
# end

  describe User, 'validation' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:phone) }
    it { should validate_presence_of(:password) }
    it { should validate_presence_of(:email) }

    it { should validate_length_of(:password).is_at_least(6).is_at_most(20)}  
    it { should validate_length_of(:name).is_at_most(50)}
    it { should validate_length_of(:phone).is_at_least(10)}

    it { should validate_numericality_of(:phone).only_integer}
    it { expect validate_uniqueness_of(:email) }
  end

  describe '#check_admin?' do

  end