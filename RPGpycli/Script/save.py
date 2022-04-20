import var

def load_data():
    f = open('../Save/save.txt', 'r')

    line = f.readline()
    print(line)
    tmp_data = line.split('|')
    print(tmp_data)

    for i in range(3):
        var.Save.data[i] = tmp_data[i]

    f.close()

def save_state():
    pass

def save_data():
    f = open('../Save/save.txt', 'w')

    tmp_str = ''

    for i in range(3):
        tmp_str += var.Save.data[i]
        
        if i < 2:
            tmp_str += '|'

    f.write(tmp_str)

    f.close()