class CreatePostImages < ActiveRecord::Migration[5.2]
  def change
    create_table :post_images do |t|
      t.text :shop_name
      t.text :image_id
      t.text :caption
      t.integer :user_id

      t.timestamps
    end
  end
end
