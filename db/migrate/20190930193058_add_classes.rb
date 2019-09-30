class AddClasses < ActiveRecord::Migration[5.2]
  def change
    create_table :classes do |t|
      t.string :name
      t.integer :hit_die
      t.text :itemProfs, array: true, default: []
      t.text :saving_throws, array: true, default: []
      t.text :level1, array: true, default: []      
      t.text :level2, array: true, default: []      
      t.text :level3, array: true, default: []      
      t.text :level4, array: true, default: []      
      t.text :level5, array: true, default: []      
      t.text :level6, array: true, default: []      
      t.text :level7, array: true, default: []      
      t.text :level8, array: true, default: []      
      t.text :level9, array: true, default: []      
      t.text :level10, array: true, default: []      
      t.text :level11, array: true, default: []      
      t.text :level12, array: true, default: []      
      t.text :level13, array: true, default: []      
      t.text :level14, array: true, default: []      
      t.text :level15, array: true, default: []      
      t.text :level16, array: true, default: []      
      t.text :level17, array: true, default: []      
      t.text :level18, array: true, default: []      
      t.text :level19, array: true, default: []      
      t.text :level20, array: true, default: []      
    end
  end
end
