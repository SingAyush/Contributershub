import random
import string

def password_generator(size, upper=1, lower=1, digits=1, symbols=1):
    chars = ''
    password = ''
    if upper:
        chars += string.ascii_uppercase
    if lower:
        chars += string.ascii_lowercase
    if digits:
        chars += string.digits
    if symbols:
        chars += string.punctuation

    if upper:
        password += random.choice(string.ascii_uppercase)
    if lower:
        password += random.choice(string.ascii_lowercase)
    if digits:
        password += random.choice(string.digits)
    if symbols:
        password += random.choice(string.punctuation)

    for i in range(size - 4):
        password += random.choice(chars)

    password = list(password)
    random.shuffle(password)
    password = ''.join(password)
    return password

print(password_generator(16, True, True, True, True))
print(password_generator(8, False, True, False, True))
