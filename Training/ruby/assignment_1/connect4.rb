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
  	if $row <= 6 and column <= 7
	  	while($board[$row][column-1] != '-')
	  		$row=$row-1 
	  	end 	
	  	$board[$row][column-1] = display_char
  	else
  		puts "Please enter valid column"
  	end
  	
  	self.displayBoard
    checkVertical(column,display_char,player)
  	checkHorizontal(column,display_char,player)
  	checkDiagonal(column,display_char,player)
  	$row=6
	end

	def checkVertical(column,player_char,player)
  	(0..6).each do |i| 
  		if $board[i][column] == player_char
  			$count += 1
  		else
  			$count = 0
  		end
  		if $count == 4
	  		displayWinner(player)
	  	end
  	end
	end

	def checkHorizontal(column,player_char,player)
  	(0..6).each do |i|
  		if $board[$row][i] == player_char
  			$count +=  1	
  		else
  			$count = 0
  		end
 			if $count == 4
	  		displayWinner(player)
	  	end
  	end
  	
	end

	def checkDiagonal(column,player_char,player)
		row = $row
		if $board[row][column] == player_char
			$count += 1
			row = row - 1
			column = column + 1
		else
			$count = 0
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



