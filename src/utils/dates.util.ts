import dayjs from 'dayjs'

export const formatDate = (date: Date | string): string => {
	const day = dayjs(date).format('D')
	const year = dayjs(date).format('YYYY')

	const month = dayjs(date).format('MMM').toLowerCase()

	return `${day} ${month}. ${year}`
}

export function isDateAfterToday(date: Date): boolean {
	return dayjs().isAfter(dayjs(date))
}
