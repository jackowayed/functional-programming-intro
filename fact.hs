-- type
factorial :: Integer -> Integer
 
-- using recursion
factorial 0 = 1
factorial n = n * factorial (n - 1)
 
-- using lists
factorial n = product [1..n]
 
-- using recursion but written without pattern matching
factorial n = if n > 0 then n * factorial (n-1) else 1
 
-- using fold
factorial n = foldl (*) 1 [1..n]
 
-- using only prefix notation and n+k-patterns (no longer allowed in Haskell 2010)
factorial 0 = 1
factorial (n+1) = (*) (n+1) (factorial n)
 
-- Point-free style
factorial = foldr (*) 1 . enumFromTo 1
