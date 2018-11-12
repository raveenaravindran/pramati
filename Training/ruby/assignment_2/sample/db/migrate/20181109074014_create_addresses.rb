class CreateAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :addresses do |t|
      t.string :street
      t.string :landmark
      t.string :city
      t.string :zipcode
      t.string :state
      t.string :country

      t.timestamps
    end
  end
end
