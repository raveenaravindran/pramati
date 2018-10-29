$row = 6
$flag = 0
$board = Array.new(7) { Array.new(7, '-') }
$check = true
class ConnectFour
	def display_board
		$board.each do | item |
			item.each do |i|
				print " " ,i, " "
			end
			puts
		end
	end

  def check_position(column,display_char,player)
  	if $row <= 6 and column <= 6
	  	while($board[$row][column] != '-')
	  		$row = $row-1 
	  		if $row == -1
		  		puts "This column is full,Please enter into another column."
		  		break
		  	end
	  	end 	
	  	$board[$row][column] = display_char
	  	
  	else
  		puts "Please enter valid column"
  	end
  	self.display_board
    check_vertical(column,display_char,player)
  	check_horizontal(column,display_char,player)
  	check_diagonal_upwards(column,display_char,player)
  	check_diagonal_downwards(column,display_char,player)
  	$row = 6
	end

	def check_vertical(column,player_char,player)
		count = 0
  	(0..6).each do | i | 
  		if $board[i][column] == player_char
  			count = count + 1
  		else
  			count = 0
  		end
  	end
  	if count == 4
  		display_winner(player)
  	end
	end

	def check_horizontal(column,player_char,player)
		count = 0
  	(0..6).each do | i |
  		if $board[$row][i] == player_char
  			count +=  1	
  		else
  			count = 0
  		end
 			if count == 4
	  		display_winner(player)
	  	end
  	end  	
	end

	def check_diagonal_upwards(column,player_char,player)
		count = 0
		diagonal_row = $row
    diagonal_column = column
    
    while diagonal_row > 0 && diagonal_column < 6
      diagonal_row = diagonal_row -1
      diagonal_column = diagonal_column + 1
    end
    while diagonal_row != 7 && diagonal_column >= 0
      if $board[diagonal_row][diagonal_column] == player_char
        count = count + 1
      else
        count = 0
      end
      diagonal_row = diagonal_row + 1
      diagonal_column = diagonal_column - 1
      if count == 4
        display_winner(player)
      end
    end
  end

  def check_diagonal_downwards(column,player_char,player)
		count = 0
		diagonal_row = $row
    diagonal_column = column
    
    while diagonal_row < 6 && diagonal_column < 6
      diagonal_row = diagonal_row + 1
      diagonal_column = diagonal_column +1
    end
    while diagonal_row != 7 && diagonal_column >= 0
      if $board[diagonal_row][diagonal_column] == player_char
        count = count + 1
      else
        count = 0
      end
      diagonal_row = diagonal_row - 1
      diagonal_column = diagonal_column - 1
      if count == 4
        display_winner(player)
      end
    end
  end

	def display_winner(player)
		print player,' WINS !!!!'
		puts
		$check = false
	end
	
	def play_game

		while($check)
			if $flag == 0
				player = 'Player 1'
				print "Player 1:"
			  input = gets.to_i
			  input_char = 'x'
			  puts 
			  check_position(input-1,input_char,player)
			  $flag = 1
			else
				player = 'Player 2'
				print "Player 2:"
			  input = gets.to_i
			  input_char = '*'
			  puts 
			  check_position(input-1,input_char,player)
			  $flag = 0
			end
		end
	end
end
object = ConnectFour.new
puts " "
puts "WELCOME TO CONNECT 4 GAME"
puts " "
object.display_board
puts " "
object.play_game
