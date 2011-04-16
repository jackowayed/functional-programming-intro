#!/usr/bin/env ruby

class Person
  def initialize(age = 0)
    @age = age
  end
  
  def get_age
    @age
  end

  def set_age(age)
    @age = age
  end
end
