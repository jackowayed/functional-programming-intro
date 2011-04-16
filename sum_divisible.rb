def divisible_by_3(i)
  i % 3 == 0
end

def imperative
  count = 0
  1.upto(50) do |i|
    count += i if divisible_by_3 i
  end
  count
end

def sum(arr)
  arr.reduce(:+)
end

def functional
  sum((1..50).to_a.select{|i| divisible_by_3 i})
end
