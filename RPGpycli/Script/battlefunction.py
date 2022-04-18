import var
import const
import carddata

def pool_generate():
    var.Pool.card['all'] = []
    var.Pool.card['fire'] = []

    for i in range(len(const.card_list)):
        var.Pool.card['all'].append(const.card_list[i])

        # Element card list
        if carddata.data[const.card_list[i]][carddata.index['element']] == 'fire':
            var.Pool.card['fire'].append(const.card_list[i])

        elif carddata.data[const.card_list[i]][carddata.index['element']] == 'water':
            var.Pool.card['water'].append(const.card_list[i])

        elif carddata.data[const.card_list[i]][carddata.index['element']] == 'nature':
            var.Pool.card['nature'].append(const.card_list[i])

        elif carddata.data[const.card_list[i]][carddata.index['element']] == 'earth':
            var.Pool.card['earth'].append(const.card_list[i])

        elif carddata.data[const.card_list[i]][carddata.index['element']] == 'light':
            var.Pool.card['light'].append(const.card_list[i])

        elif carddata.data[const.card_list[i]][carddata.index['element']] == 'dark':
            var.Pool.card['dark'].append(const.card_list[i])

        elif carddata.data[const.card_list[i]][carddata.index['element']] == 'normal':
            var.Pool.card['normal'].append(const.card_list[i])
