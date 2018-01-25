class Customer < ActiveRecord::Base
  has_many :orders
  
  PERMITTED_ATTRIBUTES = %w(nick name)

  scope :nick_like, ->(term) { where('nick LIKE ?', term + '%') }
 
  def self.autocomplete(term)
    nick_like(term).order(:nick)
  end
end
