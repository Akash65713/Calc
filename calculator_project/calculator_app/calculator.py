def calculate(expression):
    try:
        result = eval(expression)
        return str(result)
    except Exception as e:
        return "Error: " + str(e)