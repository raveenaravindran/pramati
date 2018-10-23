$row = 6
$flag=0
$board = Array.new(7) { Array.new(7, '-')}
$count = 0
$count_horizontal = 0
$check = true
class ConnectFour
	
	def displayBoard
		$board.each do |item|
			item.each do |i|
				print i," "
			end
			puts
		end
	end

  def checkPosition(column,display_char,player)
  	if $row <= 6 and column <= 6
	  	while($board[$row][column] != '-')
	  		$row=$row-1 
	  	end 	
	  		$board[$row][column] = display_char
  	displayBoard
  	end
  	checkVertical(column,display_char,player)
  	checkHorizontal($row,column,display_char,player)
  	checkDiagonal($row,column,display_char,player)
	end

	def checkVertical(column,player_char,player)
		$row=6
  	(0..6).each do |i| 
  		if $board[i][column] == player_char
  			$count += 1
  		else
  			$count = 0
  		end
  	end
  	if $count == 4
  		displayWinner(player)
  	end
	end

	def checkHorizontal(row,column,player_char,player)
		$row=6
  	(0..6).each do |i| 
  		if $board[row][i] == player_char
  			$count_horizontal = $count_horizontal + 1	
  		else
  			$count_horizontal = 0
  		end
  	end
  	print $count_horizontal
  	if $count_horizontal == 4
  		displayWinner(player)
  	end
	end

	def checkDiagonal(row,column,player_char,player)
		$row=6
  	(column..6).each do |i| 
  		if $board[row-1][i+1] == player_char
  			$count += 1
  		else
  			$count = 0
  		end
  	end
  	if $count == 4
  		displayWinner(player)
  	end
	end



	def displayWinner(player)
		print player,' WINS !!!!'
		puts
		$check = false
	end
	
	def play
		while($check)
			if $flag == 0
				player = 'Player 1'
				print "Player 1:"
			  input = gets.to_i
			  input_char = 'x'
			  puts 
			  checkPosition(input,input_char,player)
			  $flag = 1
			else
				player = 'Player 2'
				print "Player 2:"
			  input = gets.to_i
			  input_char = '*'
			  puts 
			  checkPosition(input,input_char,player)
			  $flag=0
			end
		end
	end
end
object = ConnectFour.new
object.displayBoard
object.play
